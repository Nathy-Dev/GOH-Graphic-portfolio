const sharp = require("sharp");
const path = require("path");

const src = "C:/Users/ADMIN/Desktop/NATH/GOH Graphic portfolio/goh-graphix/public/logo-source.jpg";
const out = "C:/Users/ADMIN/Desktop/NATH/GOH Graphic portfolio/goh-graphix/public/logomark.png";

sharp(src)
  .metadata()
  .then(meta => {
    console.log("Dims:", meta.width, "x", meta.height);
    const w = meta.width;
    const h = meta.height;
    // Black bars at top/bottom; white logo section in middle ~33%-67%
    const whiteTop = Math.floor(h * 0.33);
    const whiteH   = Math.floor(h * 0.34);
    // Circular logomark occupies left ~33% of full width
    const markW = Math.floor(w * 0.34);
    return sharp(src)
      .extract({ left: 0, top: whiteTop, width: markW, height: whiteH })
      .resize(600, 600, { fit: "contain", background: { r:255,g:255,b:255,alpha:1 } })
      .png()
      .toFile(out);
  })
  .then(() => console.log("Done:", out))
  .catch(e => console.error(e));
