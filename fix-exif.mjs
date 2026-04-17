import sharp from 'sharp';
import { rename } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const files = [
  'papa-frien.jpg',
  'papa-mama.jpg',
  'papa-memeber.jpg',
  'papa-navy-oldie.jpg',
  'papa-navy.jpg',
].map(f => `public/assets/images/${f}`);

for (const file of files) {
  if (!existsSync(file)) {
    console.log('Skipping (not found):', file);
    continue;
  }
  const tmp = file + '.tmp';
  await sharp(file).withMetadata({ orientation: undefined }).toFile(tmp);
  await rename(tmp, file);
  console.log('Fixed:', file);
}

console.log('Done!');