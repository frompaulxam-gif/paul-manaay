import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';

// Render the same portfolio at /offer/ for static hosts, including project subpaths.
const publicDirectory = resolve(process.argv[2] || 'dist');
const homepage = await readFile(join(publicDirectory, 'index.html'), 'utf8');
const offerPage = homepage
  .replace('<title>Paul Manaay | Selected websites</title>', '<title>Free website build | Paul Manaay</title>')
  .replace(/(<meta name="description" content=")[^"]*(">)/, '$1I’ll design and build your website for free. All I ask in return is a review and a referral. See Paul Manaay’s work and get in touch.$2')
  .replace(/((?:src|href|data-src|poster)=")(assets\/|style\.css|app\.js)/g, '$1../$2');
await mkdir(join(publicDirectory, 'offer'), { recursive: true });
await writeFile(join(publicDirectory, 'offer', 'index.html'), offerPage);
console.log('Built /offer/ from the portfolio homepage.');
