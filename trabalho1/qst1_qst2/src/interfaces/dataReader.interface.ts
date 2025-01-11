export interface DataReader {
  readSystem(): Promise<void>;
  readFile(): void;
  readTCP(): void;
}
