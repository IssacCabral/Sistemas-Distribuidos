import * as net from "node:net";
import { Request, RequestType } from "../../shared/request.shared";

export async function fetchCandidates(client: net.Socket) {
  const request: Request = {
    type: RequestType.FETCH_CANDIDATES,
  };

  client.write(JSON.stringify(request));
}
