const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT = path.join(__dirname, '..');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf'
};

// Local stand-in for Vercel's /api/chat. With GEMINI_API_KEY set it runs the
// real function; without it, it streams a canned reply so the UI can be tested.
async function handleChat(req, res) {
  const chunks = [];
  for await (const c of req) chunks.push(c);
  const body = Buffer.concat(chunks);

  if (!process.env.GEMINI_API_KEY) {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    const reply = '(local mock, no GEMINI_API_KEY) Utku is a 4th-year Software Engineering student at Çankaya University. Email: utkucnvrdi@gmail.com';
    for (const word of reply.split(' ')) {
      res.write(word + ' ');
      await new Promise((r) => setTimeout(r, 40));
    }
    res.end();
    return;
  }

  const { POST } = await import('../api/chat.mjs');
  const response = await POST(new Request('http://localhost/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  }));
  res.writeHead(response.status, Object.fromEntries(response.headers));
  if (response.body) {
    for await (const chunk of response.body) res.write(chunk);
  }
  res.end();
}

http.createServer((req, res) => {
  if (req.method === 'POST' && req.url.split('?')[0] === '/api/chat') {
    handleChat(req, res).catch((err) => {
      console.error(err);
      if (!res.headersSent) res.writeHead(500);
      res.end();
    });
    return;
  }

  const safePath = path.normalize(req.url.split('?')[0]).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(ROOT, safePath === '/' || safePath === '\\' ? 'index.html' : safePath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(PORT, () => {
  console.log(`Portfolio server running at http://localhost:${PORT}`);
});
