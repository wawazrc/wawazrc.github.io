import { copyFileSync, cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const base = process.env.PAGES_BASE || '/menu/';
const normalizedBase = base.endsWith('/') ? base : `${base}/`;
const root = process.cwd();
const manifestPath = join(root, 'public', 'build', 'manifest.json');
const distDir = join(root, 'dist');
const publicBuildDir = join(root, 'public', 'build');
const publicImagesDir = join(root, 'public', 'images');

const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
const appEntry = manifest['resources/js/app.js'];

if (!appEntry) {
  throw new Error('Vite manifest is missing resources/js/app.js');
}

rmSync(distDir, { force: true, recursive: true });
mkdirSync(distDir, { recursive: true });

cpSync(publicBuildDir, join(distDir, 'build'), { recursive: true });
cpSync(publicImagesDir, join(distDir, 'images'), { recursive: true });

for (const file of ['favicon.ico', 'robots.txt']) {
  const source = join(root, 'public', file);
  if (existsSync(source)) {
    copyFileSync(source, join(distDir, file));
  }
}

const cssLinks = (appEntry.css || [])
  .map((file) => `    <link rel="stylesheet" crossorigin href="${normalizedBase}build/${file}">`)
  .join('\n');

const html = `<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>HAPPUP Antasari | Buku Menu</title>
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=poppins:400,500,600,700|playfair-display:600,700,800|cinzel:600,700|jetbrains-mono:400,500" rel="stylesheet">
    <script type="module" crossorigin src="${normalizedBase}build/${appEntry.file}"></script>
${cssLinks}
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
`;

writeFileSync(join(distDir, 'index.html'), html);
writeFileSync(join(distDir, '404.html'), html);