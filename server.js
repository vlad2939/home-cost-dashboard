'use strict';

const http = require('http');
const fs = require('fs/promises');
const path = require('path');

const ROOT_DIR = __dirname;
const DATA_DIR = process.env.HOMEDASH_DATA_DIR || ROOT_DIR;
const DB_PATH = path.join(DATA_DIR, 'database.json');
const DEFAULT_DB_PATH = path.join(ROOT_DIR, 'database.json');
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

function send(res, statusCode, body, contentType = 'text/plain; charset=utf-8') {
  res.writeHead(statusCode, {
    'Content-Type': contentType,
    'Cache-Control': 'no-store'
  });
  res.end(body);
}

async function ensureDatabase() {
  try {
    await fs.access(DB_PATH);
  } catch (err) {
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.copyFile(DEFAULT_DB_PATH, DB_PATH);
  }
}

async function readRequestBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return Buffer.concat(chunks).toString('utf8');
}

async function handleDatabaseApi(req, res) {
  if (req.method === 'GET') {
    const content = await fs.readFile(DB_PATH, 'utf8');
    send(res, 200, content, 'application/json; charset=utf-8');
    return;
  }

  if (req.method === 'POST') {
    const body = await readRequestBody(req);
    const parsed = JSON.parse(body);

    if (!Array.isArray(parsed.rawData) || !Array.isArray(parsed.cards) || typeof parsed.settings !== 'object') {
      send(res, 400, JSON.stringify({ error: 'Structura bazei de date este invalidă.' }), 'application/json; charset=utf-8');
      return;
    }

    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.writeFile(DB_PATH, JSON.stringify(parsed, null, 2) + '\n', 'utf8');
    send(res, 200, JSON.stringify({ ok: true }), 'application/json; charset=utf-8');
    return;
  }

  send(res, 405, JSON.stringify({ error: 'Metodă nepermisă.' }), 'application/json; charset=utf-8');
}

async function serveStatic(req, res) {
  const requestUrl = new URL(req.url, `http://${req.headers.host}`);
  const rawPath = requestUrl.pathname === '/' ? '/index.html' : requestUrl.pathname;
  const requestedPath = path.normalize(decodeURIComponent(rawPath)).replace(/^(\.\.[/\\])+/, '');
  const filePath = path.join(ROOT_DIR, requestedPath);
  const relativePath = path.relative(ROOT_DIR, filePath);

  if (relativePath.startsWith('..') || path.isAbsolute(relativePath)) {
    send(res, 403, 'Acces interzis.');
    return;
  }

  try {
    const content = await fs.readFile(filePath);
    const ext = path.extname(filePath).toLowerCase();
    send(res, 200, content, MIME_TYPES[ext] || 'application/octet-stream');
  } catch (err) {
    send(res, 404, 'Fișierul nu a fost găsit.');
  }
}

const server = http.createServer(async (req, res) => {
  try {
    const requestUrl = new URL(req.url, `http://${req.headers.host}`);
    if (requestUrl.pathname === '/api/database') {
      await handleDatabaseApi(req, res);
      return;
    }

    await serveStatic(req, res);
  } catch (err) {
    send(res, 500, JSON.stringify({ error: err.message }), 'application/json; charset=utf-8');
  }
});

ensureDatabase().then(() => {
  server.listen(PORT, HOST, () => {
    console.log(`HomeDash rulează la http://${HOST}:${PORT}`);
    console.log(`Baza de date: ${DB_PATH}`);
  });
}).catch((err) => {
  console.error('HomeDash nu a putut porni:', err);
  process.exit(1);
});
