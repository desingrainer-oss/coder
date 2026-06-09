import sharp from "sharp";
import fs from "fs";
import path from "path";

const assetsDir =
  "C:/Users/User/.cursor/projects/d-DESCARGA-proyectos-Coders/assets";
const outDir = "d:/DESCARGA/proyectos/Coders/coders-solution/public/clients";

const logos = [
  { pattern: "images_21-", out: "ganac.webp" },
  { pattern: "images_20-", out: "pacific-life.webp" },
  { pattern: "images_19-", out: "innovak-global.webp" },
  { pattern: "images_25-", out: "regias.webp" },
  { pattern: "images_23-", out: "jn-bank.webp" },
  { pattern: "images_24-", out: "fintech-mexico.webp" },
  { pattern: "images_22-", out: "grupo-impresor.webp" },
];

const THRESHOLD = 28;

function isBackground(r, g, b) {
  return r <= THRESHOLD && g <= THRESHOLD && b <= THRESHOLD;
}

async function removeBlackBackground(inputPath, outputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height } = info;
  const pixels = new Uint8ClampedArray(data);
  const visited = new Uint8Array(width * height);
  const queue = [];

  const pushIfBg = (x, y) => {
    const idx = y * width + x;
    if (visited[idx]) return;
    const i = idx * 4;
    if (!isBackground(pixels[i], pixels[i + 1], pixels[i + 2])) return;
    visited[idx] = 1;
    queue.push(idx);
  };

  for (let x = 0; x < width; x++) {
    pushIfBg(x, 0);
    pushIfBg(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    pushIfBg(0, y);
    pushIfBg(width - 1, y);
  }

  while (queue.length) {
    const idx = queue.pop();
    const i = idx * 4;
    pixels[i + 3] = 0;

    const x = idx % width;
    const y = (idx - x) / width;
    if (x > 0) pushIfBg(x - 1, y);
    if (x < width - 1) pushIfBg(x + 1, y);
    if (y > 0) pushIfBg(x, y - 1);
    if (y < height - 1) pushIfBg(x, y + 1);
  }

  await sharp(pixels, {
    raw: { width, height, channels: 4 },
  })
    .webp({ lossless: true, effort: 4 })
    .toFile(outputPath);
}

fs.mkdirSync(outDir, { recursive: true });

const files = fs.readdirSync(assetsDir);

for (const logo of logos) {
  const source = files.find((f) => f.includes(logo.pattern));
  if (!source) {
    console.error(`Missing source for ${logo.out}`);
    process.exit(1);
  }

  const input = path.join(assetsDir, source);
  const output = path.join(outDir, logo.out);
  await removeBlackBackground(input, output);

  const meta = await sharp(output).metadata();
  console.log(`✓ ${logo.out} (${meta.width}x${meta.height}, alpha: ${meta.hasAlpha})`);
}
