/* global Buffer, process */
import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outDir = path.join(__dirname, "..", "public", "images");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const remoteUrl =
  "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg";
const fileBase = "shoe-amz";

function download(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode !== 200)
          return reject(new Error("Non-200 status " + res.statusCode));
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
      })
      .on("error", reject);
  });
}

async function run() {
  console.log("Downloading:", remoteUrl);
  const buf = await download(remoteUrl);
  console.log("Downloaded", buf.length, "bytes");

  const sizes = [360, 720];
  for (const size of sizes) {
    const outJpeg = path.join(outDir, `${fileBase}-${size}.jpg`);
    const outWebp = path.join(outDir, `${fileBase}-${size}.webp`);
    await sharp(buf)
      .resize(size, size, { fit: "cover" })
      .jpeg({ quality: 75 })
      .toFile(outJpeg);
    console.log("Wrote", outJpeg);

    await sharp(buf)
      .resize(size, size, { fit: "cover" })
      .webp({ quality: 75 })
      .toFile(outWebp);
    console.log("Wrote", outWebp);
    // also write cropped variants with explicit -crop suffix (same as cover but explicit filename)
    const outJpegCrop = path.join(outDir, `${fileBase}-${size}-crop.jpg`);
    const outWebpCrop = path.join(outDir, `${fileBase}-${size}-crop.webp`);
    await sharp(buf)
      .resize(size, size, { fit: "cover" })
      .jpeg({ quality: 80 })
      .toFile(outJpegCrop);
    console.log("Wrote", outJpegCrop);

    await sharp(buf)
      .resize(size, size, { fit: "cover" })
      .webp({ quality: 80 })
      .toFile(outWebpCrop);
    console.log("Wrote", outWebpCrop);
    // also write padded (letterboxed) variants so the full image is visible inside a square
    const outJpegPad = path.join(outDir, `${fileBase}-${size}-pad.jpg`);
    const outWebpPad = path.join(outDir, `${fileBase}-${size}-pad.webp`);
    await sharp(buf)
      .resize(size, size, {
        fit: "contain",
        background: { r: 255, g: 255, b: 255, alpha: 1 },
      })
      .jpeg({ quality: 80 })
      .toFile(outJpegPad);
    console.log("Wrote", outJpegPad);

    await sharp(buf)
      .resize(size, size, {
        fit: "contain",
        background: { r: 255, g: 255, b: 255, alpha: 1 },
      })
      .webp({ quality: 80 })
      .toFile(outWebpPad);
    console.log("Wrote", outWebpPad);
  }

  console.log("Optimization complete. Files are in public/images/");
}

run().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
