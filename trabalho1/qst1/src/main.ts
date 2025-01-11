import { PropertyInputStream } from "./app/propertyInputStream";
import { PropertyOutputStream } from "./app/propertyOutputStream";
import { Property } from "./entities/property";

const data: Property[] = [];

(async () => {
  const inputStream = new PropertyInputStream(data, process.stdin);
  await inputStream.readSystem();

  const outputStream = new PropertyOutputStream(data, process.stdout);
  outputStream.writeSystem();
})();

// // outputStream.writeFile();
// // outputStream.writeTCP();
