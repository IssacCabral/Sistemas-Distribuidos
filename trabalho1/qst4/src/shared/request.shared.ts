export enum RequestType {
  CANDIDATES_LIST = "candidates_list",
  VOTE = "vote",
}

export interface Request {
  type: RequestType;
  content: any;
}
