import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "..", "public", "MD_Sajib_Resume.pdf");

const doc = await PDFDocument.create();
const page = doc.addPage([612, 792]);
const font = await doc.embedFont(StandardFonts.Helvetica);
const bold = await doc.embedFont(StandardFonts.HelveticaBold);
const { height } = page.getSize();

let y = height - 72;
page.drawText("MD SAJIB", { x: 72, y, size: 22, font: bold, color: rgb(0.1, 0.1, 0.12) });
y -= 36;
page.drawText("Full Stack Web Developer", { x: 72, y, size: 12, font, color: rgb(0.35, 0.35, 0.4) });
y -= 48;
page.drawText("This PDF is a working placeholder for the Download CV button.", { x: 72, y, size: 11, font });
y -= 18;
page.drawText("Replace the file at public/MD_Sajib_Resume.pdf with your real resume.", {
  x: 72,
  y,
  size: 11,
  font,
  color: rgb(0.2, 0.45, 0.65),
});

const bytes = await doc.save();
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, bytes);
console.log("Wrote", outPath);
