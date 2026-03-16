import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const searchContext = async () => {
  const datapath = path.join(__dirname, "../data"); // src/data folder

  const files = fs.readdirSync(datapath);

  let combinedText = "";
  files.forEach((file) => {
    const content = fs.readFileSync(path.join(datapath, file), "utf-8");
    combinedText += content + "\n";
  });

  return combinedText;
};
