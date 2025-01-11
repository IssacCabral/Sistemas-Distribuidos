export interface DataWriter {
  writeSystem(): void;
  writeFile(): void;
  writeTCP(): void;
}
