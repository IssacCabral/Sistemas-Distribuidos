export interface DataReader {
  readSystem(): void
  readFile(): void
  readTCP(): void
}