import * as net from "node:net";
import { Request, RequestType } from "../../shared/request.shared";

export async function fetchResult(client: net.Socket) {
  const request: Request = {
    type: RequestType.FETCH_RESULT,
  };

  client.write(JSON.stringify(request));
}
