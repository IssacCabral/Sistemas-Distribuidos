import { PropertyInputStream } from "./streams/propertyInputStream";
import { PropertyOutputStream } from "./streams/propertyOutputStream";
import { Property } from "./entities/property";

const data: Property[] = [];

(async () => {
  const inputStream = new PropertyInputStream(data, process.stdin);
  await inputStream.readSystem();
  await inputStream.readSystem();
  await inputStream.readSystem();

  // inputStream.readTCP();

  const outputStream = new PropertyOutputStream(data, process.stdout);
  outputStream.writeSystem();
  // outputStream.writeFile();
  // outputStream.writeTCP();

  // inputStream.readFile();
})();

// // outputStream.writeFile();
// // outputStream.writeTCP();
