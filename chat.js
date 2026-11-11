/* ==========================================================================
   "Ask about me" assistant — talks to /api/chat (api/chat.mjs) and streams
   the answer into the panel. Texts come from app.js (window.SITE_TEXTS).
   ========================================================================== */
(() => {
  const MAX_QUESTIONS = 12; // per page visit; the server has its own limits too

  const root = document.getElementById('ask');
  if (!root) return;
  const fab = document.getElementById('ask-fab');
  const panel = document.getElementById('ask-panel');
  const closeBtn = document.getElementById('ask-close');
  const log = document.getElementById('ask-log');
  const chips = document.getElementById('ask-chips');
  const form = document.getElementById('ask-form');
  const input = document.getElementById('ask-input');
  const sendBtn = document.getElementById('ask-send');

  const history = []; // { role: 'user' | 'assistant', content: string }
  let busy = false;
  let asked = 0;

  const t = (key, fallback) => (window.SITE_TEXTS && window.SITE_TEXTS[key]) || fallback;

  function setOpen(open) {
    panel.hidden = !open;
    root.classList.toggle('is-open', open);
    fab.setAttribute('aria-expanded', String(open));
    if (open) setTimeout(() => input.focus(), 50);
    else fab.focus();
  }

  fab.addEventListener('click', () => setOpen(panel.hidden));
  closeBtn.addEventListener('click', () => setOpen(false));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !panel.hidden) setOpen(false);
  });

  // Turn plain text into nodes, making e-mails and URLs clickable (no innerHTML).
  const LINK_RE = /(https?:\/\/[^\s)]+|[\w.+-]+@[\w-]+\.[\w.]+)/g;
  function renderText(el, text) {
    el.textContent = '';
    let last = 0;
    for (const m of text.matchAll(LINK_RE)) {
      el.append(text.slice(last, m.index));
      const raw = m[0].replace(/[.,;:]+$/, '');
      const a = document.createElement('a');
      a.textContent = raw;
      a.href = raw.includes('@') && !raw.startsWith('http') ? `mailto:${raw}` : raw;
      if (a.href.startsWith('http')) { a.target = '_blank'; a.rel = 'noopener'; }
      el.append(a);
      last = m.index + raw.length;
    }
    el.append(text.slice(last));
  }

  function addBubble(role, text) {
    const el = document.createElement('div');
    el.className = `ask-msg ask-msg--${role}`;
    if (text) renderText(el, text);
    log.append(el);
    log.scrollTop = log.scrollHeight;
    return el;
  }

  async function ask(question) {
    question = question.trim();
    if (!question || busy) return;
    if (asked >= MAX_QUESTIONS) {
      addBubble('assistant', t('ask.limit', 'You’ve reached the question limit for this chat.'));
      return;
    }
    asked += 1;
    busy = true;
    sendBtn.disabled = true;
    chips.hidden = true;

    addBubble('user', question);
    history.push({ role: 'user', content: question });
    const bubble = addBubble('assistant', '');
    bubble.classList.add('is-typing');

    let answer = '';
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      });
      if (!res.ok || !res.body) throw new Error(`HTTP ${res.status}`);
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        answer += decoder.decode(value, { stream: true });
        bubble.classList.remove('is-typing');
        renderText(bubble, answer);
        log.scrollTop = log.scrollHeight;
      }
      answer = answer.trim();
      if (!answer) throw new Error('empty answer');
      history.push({ role: 'assistant', content: answer });
    } catch (err) {
      console.warn('assistant:', err);
      history.pop(); // forget the unanswered question
      bubble.classList.remove('is-typing');
      bubble.classList.add('is-error');
      renderText(bubble, t('ask.error', 'I can’t answer right now, please try again in a moment.'));
    } finally {
      busy = false;
      sendBtn.disabled = false;
      input.focus();
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = input.value;
    input.value = '';
    ask(q);
  });

  chips.addEventListener('click', (e) => {
    const chip = e.target.closest('.ask-chip');
    if (chip) ask(chip.textContent);
  });
})();
