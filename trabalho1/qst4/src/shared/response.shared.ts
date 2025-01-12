export enum ResponseType {
  CANDIDATES = "candidates",
  VOTE_RESULT = "vote_result",
}

export interface Response {
  type: ResponseType;
  content: any;
}
