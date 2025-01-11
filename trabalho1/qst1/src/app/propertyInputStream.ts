import { DataReader } from "../interfaces/dataReader.interface";

export class PropertyInputStream implements DataReader {
  readSystem(): void {
    throw new Error("Method not implemented.");
  }

  readFile(): void {
    throw new Error("Method not implemented.");
  }

  readTCP(): void {
    throw new Error("Method not implemented.");
  }
}
