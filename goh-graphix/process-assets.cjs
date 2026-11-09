const sharp = require("sharp");
const fs = require("node:fs/promises");
const path = require("node:path");

const publicDirectory = path.join(__dirname, "public");
const previewsDirectory = path.join(publicDirectory, "previews");

const previews = [
  ["20260417_025719.png", "itz-done-identity", { left: 140, top: 1790, width: 840, height: 1180 }],
  ["20260417_102907.png", "itz-done-presentation", { left: 560, top: 650, width: 2180, height: 1320 }],
  ["20260417_152725.png", "youtube-thumbnails", { left: 410, top: 620, width: 2470, height: 1370 }],
  ["20260417_152808.png", "brand-mockups", { left: 415, top: 620, width: 2430, height: 1370 }],
  ["20260417_153028.png", "social-campaigns", { left: 415, top: 620, width: 2430, height: 1370 }],
  ["20260417_153117.png", "flyer-designs", { left: 415, top: 620, width: 2430, height: 1370 }],
  ["20260417_153147.png", "logo-designs", { left: 415, top: 620, width: 2430, height: 1370 }],
  ["20260417_153218.png", "colour-story", { left: 560, top: 650, width: 2180, height: 1320 }],
  ["20260417_153248.png", "design-services"],
  ["20260417_153331.png", "studio-identity"],
  ["20260417_153425.png", "brand-overview"],
  ["20260417_195839.jpg", "about-studio"],
  ["20260417_224226.png", "contact-design"],
];

async function buildAssets() {
  await fs.mkdir(previewsDirectory, { recursive: true });

  for (const [source, name, crop] of previews) {
    let image = sharp(path.join(publicDirectory, "works", source));
    if (crop) image = image.extract(crop);
    await image.resize(960, 720, { fit: "contain", background: "#f7f6f2" }).webp({ quality: 84 }).toFile(path.join(previewsDirectory, `${name}.webp`));
  }

  await sharp(path.join(publicDirectory, "works", "20260417_025719.png"))
    .extract({ left: 140, top: 1790, width: 840, height: 1180 })
    .resize(840, 1050, { fit: "cover", position: "centre" })
    .webp({ quality: 88 })
    .toFile(path.join(previewsDirectory, "hero-identity.webp"));

  await sharp(path.join(publicDirectory, "works", "20260417_153028.png"))
    .extract({ left: 1490, top: 685, width: 515, height: 685 })
    .resize(540, 720, { fit: "cover" })
    .webp({ quality: 88 })
    .toFile(path.join(previewsDirectory, "hero-campaign.webp"));

  const { data, info } = await sharp(path.join(publicDirectory, "works", "20260417_153425.png"))
    .extract({ left: 2050, top: 300, width: 1050, height: 1040 })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let offset = 0; offset < data.length; offset += info.channels) {
    const red = data[offset];
    const green = data[offset + 1];
    const blue = data[offset + 2];
    const saturation = Math.max(red, green, blue) - Math.min(red, green, blue);
    data[offset + 3] = Math.max(0, Math.min(255, (saturation - 24) * 8));
  }

  const labels = new Uint32Array(info.width * info.height);
  const queue = new Uint32Array(labels.length);
  const retained = new Set();
  let component = 0;

  for (let start = 0; start < labels.length; start += 1) {
    if (labels[start] || data[start * info.channels + 3] < 80) continue;
    component += 1;
    let cursor = 0;
    let count = 1;
    labels[start] = component;
    queue[0] = start;

    while (cursor < count) {
      const pixel = queue[cursor];
      cursor += 1;
      const column = pixel % info.width;
      const row = Math.floor(pixel / info.width);
      const neighbors = [
        column > 0 ? pixel - 1 : -1,
        column < info.width - 1 ? pixel + 1 : -1,
        row > 0 ? pixel - info.width : -1,
        row < info.height - 1 ? pixel + info.width : -1,
      ];
      for (const neighbor of neighbors) {
        if (neighbor < 0 || labels[neighbor] || data[neighbor * info.channels + 3] < 80) continue;
        labels[neighbor] = component;
        queue[count] = neighbor;
        count += 1;
      }
    }
    if (count >= 10000) retained.add(component);
  }

  if (retained.size === 0) throw new Error("No logo artwork found in the source image");
  for (let pixel = 0; pixel < labels.length; pixel += 1) {
    if (!retained.has(labels[pixel])) data[pixel * info.channels + 3] = 0;
  }

  const logo = await sharp(data, { raw: info }).trim().resize(512, 512, { fit: "contain", background: "#00000000" }).png().toBuffer();
  await fs.writeFile(path.join(publicDirectory, "logomark.png"), logo);
  await sharp(logo).resize(180, 180).png().toFile(path.join(__dirname, "app", "apple-icon.png"));
  const icon = await sharp(logo).resize(64, 64).png().toBuffer();
  const header = Buffer.alloc(22);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  header[6] = 64;
  header[7] = 64;
  header.writeUInt16LE(1, 10);
  header.writeUInt16LE(32, 12);
  header.writeUInt32LE(icon.length, 14);
  header.writeUInt32LE(22, 18);
  await fs.writeFile(path.join(__dirname, "app", "favicon.ico"), Buffer.concat([header, icon]));
  console.log(`Built ${previews.length + 2} optimized previews and repaired the logo and site icons.`);
}

buildAssets().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
