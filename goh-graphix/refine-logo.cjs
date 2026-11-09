const sharp = require("sharp");
// Better logomark crop - just the circular mark, no "G" text clipping in
const src = "C:/Users/ADMIN/Desktop/NATH/GOH Graphic portfolio/goh-graphix/public/logo-source.jpg";
const out = "C:/Users/ADMIN/Desktop/NATH/GOH Graphic portfolio/goh-graphix/public/logomark.png";
sharp(src).metadata().then(meta => {
  const w = meta.width, h = meta.height;
  const top    = Math.floor(h * 0.38);
  const height = Math.floor(h * 0.25);
  const left   = Math.floor(w * 0.03);
  const width  = Math.floor(w * 0.30); // only the circular mark
  return sharp(src)
    .extract({ left, top, width, height })
    .trim({ background: "#F0F0F0", threshold: 30 })
    .resize(600, 600, { fit: "contain", background: { r:255,g:255,b:255,alpha:0 } })
    .png()
    .toFile(out);
}).then(() => console.log("Logomark refined")).catch(console.error);
