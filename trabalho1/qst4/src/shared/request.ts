export enum RequestType {
  LOGIN = "login",
  VOTE = "vote",
}

export interface Request {
  type: RequestType;
  content: any;
}
