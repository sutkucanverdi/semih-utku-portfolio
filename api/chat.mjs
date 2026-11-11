// Vercel serverless function: POST /api/chat
// Answers visitors' questions about Semih Utku Canverdi using Gemini,
// grounded only in the profile below. Streams plain text back.
//
// Needs the GEMINI_API_KEY environment variable (set it in Vercel,
// never in the page). CHAT_MODEL can override the model.

import { GoogleGenAI, ApiError } from '@google/genai';

const MODEL = process.env.CHAT_MODEL || 'gemini-3.5-flash-lite';
const MAX_TURNS = 16; // messages kept from the conversation
const MAX_CHARS = 600; // per visitor message

const PROFILE = `
# Semih Utku Canverdi

4th-year Software Engineering student at Çankaya University (Ankara, Türkiye), 2023 – present.
Likes building whole systems: backend services, web interfaces, data pipelines and ML models.
Most interested in AI and FinTech. Also a conservatory-trained pianist.

## Work experience
- VISTA Lab (research), September 2026 – present: developing a deep learning model that predicts
  optimal finger positions for classical piano scores. Work covers data preprocessing, feature
  extraction and neural network pipelines (Python, PyTorch).
- TEİAŞ (internship), July 2026 – August 2026: developed and maintained internal mission-critical web
  applications with Java (Spring Boot) and Angular: RESTful API design, secure database integration,
  modular frontend components for institutional operations.
- TeamSec, July 2025 – January 2026: backend services and interactive operational and financial
  dashboards with FastAPI and Streamlit; migrated legacy systems to React; data analysis in Power BI;
  optimized SQL queries and indexing to improve PostgreSQL performance and reliability.

## Projects
- MağaraJam (game jam): Unity & C# game prototype with AI agents using search, pathfinding and
  optimization algorithms.
- YatDice (personal): a dice game built from scratch in C# with clean object-oriented architecture,
  randomized mechanics and structured state management.
- Air Quality Prediction (university): Python machine learning model on environmental datasets,
  with exploratory data analysis and a full data science workflow.
- Knight Path Finder: a visualizer that finds the shortest knight path around obstacles with BFS
  (there is a playable demo on this site).
- This portfolio site: plain HTML/CSS/JS, a playable piano hero (white keys = skills, black keys =
  experience and projects), and this AI assistant (Google Gemini API via a Vercel serverless function).

## Certificates
- May 2026: Certificate of Achievement, HEALTH-AI project (Erasmus+ / European Union funded).

## Education
- Software Engineering, Çankaya University, 2023 – present.
- Music / Piano, Süleymanpaşa Municipality Conservatory, 2017 – 2021.
- High school: Namık Kemal Anadolu Lisesi, 2019 – 2023.

## Skills
- Languages: Python, Java, C/C++, C#, JavaScript, SQL, HTML/CSS
- Frameworks: PyTorch, Spring Boot, React, Angular, FastAPI, Streamlit
- Tools: PostgreSQL, Docker, Git, Power BI, Unity
- Concepts: machine learning, system architecture, OOP, data structures

## Contact
- Email: utkucnvrdi@gmail.com
- LinkedIn: https://tr.linkedin.com/in/semihutkucanverdi
- GitHub: https://github.com/sutkucanverdi
- The CV can be viewed and downloaded in the CV section of this site.
`.trim();

const SYSTEM = `You are the assistant on Semih Utku Canverdi's personal portfolio website. Visitors are
mostly recruiters, engineers and classmates who want to learn about Utku (Semih Utku goes by Utku).

Answer using only the profile below. Speak about Utku in the third person, by name (use they/them if a pronoun is needed), warmly and plainly.
Keep answers short: usually two to four sentences, a short list only when it truly helps. Plain
text, no markdown headings or tables.

If the profile does not contain the answer (salary expectations, personal life, opinions not
stated, anything you would have to guess), say you don't know and suggest contacting Utku by email
or LinkedIn. Never invent dates, grades, employers, numbers or skills.

If a question is unrelated to Utku (general coding help, homework, other topics), politely say you
are only here to answer questions about Utku and Utku's work.

Reply in the language the visitor writes in (Turkish or English, or any other).

<profile>
${PROFILE}
</profile>`;

let client; // created on first request

function badRequest(msg, status = 400) {
  return new Response(JSON.stringify({ error: msg }), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}

/** Keep only well-formed, alternating, size-limited turns ending with the visitor. */
function cleanMessages(raw) {
  if (!Array.isArray(raw)) return null;
  const msgs = raw
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .map((m) => ({ role: m.role, content: m.content.trim().slice(0, m.role === 'user' ? MAX_CHARS : 2000) }))
    .filter((m) => m.content)
    .slice(-MAX_TURNS);
  while (msgs.length && msgs[0].role !== 'user') msgs.shift();
  if (!msgs.length || msgs[msgs.length - 1].role !== 'user') return null;
  return msgs;
}

export async function POST(request) {
  if (!process.env.GEMINI_API_KEY) {
    return badRequest('The assistant is not configured yet.', 503);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return badRequest('Invalid JSON.');
  }
  const messages = cleanMessages(body?.messages);
  if (!messages) return badRequest('Send a messages array ending with a user message.');

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        client ??= new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const result = await client.models.generateContentStream({
          model: MODEL,
          contents: messages.map((m) => ({
            role: m.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: m.content }],
          })),
          config: {
            systemInstruction: SYSTEM,
            maxOutputTokens: 1024,
          },
        });
        let sent = false;
        for await (const chunk of result) {
          const text = chunk.text;
          if (text) {
            controller.enqueue(encoder.encode(text));
            sent = true;
          }
        }
        if (!sent) {
          controller.enqueue(encoder.encode("Sorry, I can't help with that one."));
        }
      } catch (err) {
        console.error('chat error', err instanceof ApiError ? `${err.status} ${err.message}` : err);
        const msg =
          err instanceof ApiError && err.status === 429
            ? 'The assistant is busy right now, please try again in a minute.'
            : 'Something went wrong, please try again.';
        controller.enqueue(encoder.encode(`

${msg}`));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}
