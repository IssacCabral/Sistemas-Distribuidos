export enum ResponseType {
  CANDIDATES = "candidates",
  RESULT = "result",
}

export interface Response {
  type: ResponseType;
  content: any;
}
