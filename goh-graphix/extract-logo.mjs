const sharp = require("sharp");
const path = require("path");

const src = path.join("C:/Users/ADMIN/Desktop/NATH/GOH Graphic portfolio/goh-graphix/public/logo-source.jpg");
const out = path.join("C:/Users/ADMIN/Desktop/NATH/GOH Graphic portfolio/goh-graphix/public/logomark.png");

sharp(src)
  .metadata()
  .then(meta => {
    console.log("Image dimensions:", meta.width, "x", meta.height);
    // The logo has black bars top/bottom; logo is in the middle white section
    // Crop the circular logomark (left portion of the logo)
    const w = meta.width;
    const h = meta.height;
    // White section starts roughly at 35% height, ends at 65%
    const whiteTop = Math.floor(h * 0.33);
    const whiteH = Math.floor(h * 0.34);
    // Logomark is in left ~35% of width within that section
    const markW = Math.floor(w * 0.35);
    
    return sharp(src)
      .extract({ left: 0, top: whiteTop, width: markW, height: whiteH })
      .resize(512, 512, { fit: "contain", background: { r:0,g:0,b:0,alpha:0 } })
      .png({ quality: 100 })
      .toFile(out);
  })
  .then(() => console.log("Logomark extracted to:", out))
  .catch(e => console.error("Error:", e));
