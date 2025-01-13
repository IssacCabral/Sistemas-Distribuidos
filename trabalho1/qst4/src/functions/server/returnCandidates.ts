import { candidates } from "../../constants/candidates";
import { Response, ResponseType } from "../../shared/response.shared";
import * as net from "node:net";

export function returnCandidates(socket: net.Socket) {
  const response: Response = {
    type: ResponseType.CANDIDATES,
    content: candidates,
  };
  socket.write(JSON.stringify(response));
}
