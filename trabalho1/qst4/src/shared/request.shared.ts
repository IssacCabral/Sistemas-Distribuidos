export enum RequestType {
  FETCH_CANDIDATES = "fetch_candidates",
  VOTE = "vote",
  FETCH_RESULT = "fetch_result",
  INSERT = "insert",
  REMOVE = "remove",
}

export interface Request {
  type: RequestType;
  content?: any;
}
