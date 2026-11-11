# Semih Utku Canverdi — Portfolio

Personal portfolio site. Plain HTML, CSS and JavaScript — no framework, no build step.

- **Playable piano hero** — white keys are skills, black keys are experience and projects. Works with mouse, touch or the computer keyboard (Z–M / Q–U white, S D G H J / 2 3 5 6 7 black). "Play" runs a C major scale and arpeggio with real right-hand fingering.
- **Interactive demos** — a piano fingering preview and a Knight Path Finder (BFS shortest knight path around obstacles).
- **English / Turkish** — English by default; the choice is remembered.
- **CV** — viewable in the page or downloadable as PDF.
- **Ask about me** — an AI assistant (Google Gemini API) that answers visitors' questions from my CV. It runs as a Vercel serverless function (`api/chat.mjs`) and needs the `GEMINI_API_KEY` environment variable; `CHAT_MODEL` optionally overrides the model.

## Run locally

```bash
node dev/server.js
```

Then open `http://localhost:3000`. Without `GEMINI_API_KEY` the assistant streams a canned local reply.

## Deploy

Static site, deployed on Vercel straight from this repository (`vercel.json` holds the headers).
