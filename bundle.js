import { bundle } from "lightningcss";
import fs from "node:fs";

const inputFileName = "main.css";
const outputFilePath = `./bundled.css`;

const { code } = bundle({
  filename: inputFileName,
  minify: true,
});

fs.writeFileSync(outputFilePath, code);
