import * as net from "node:net";
import { Response, ResponseType } from "../../shared/response.shared";
import { calculateWinner } from "./calculateWinner";

export function returnResult(socket: net.Socket) {
  const response: Response = {
    type: ResponseType.RESULT,
    content: calculateWinner(),
  };

  socket.write(JSON.stringify(response));
}
