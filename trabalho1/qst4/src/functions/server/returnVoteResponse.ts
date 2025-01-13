import * as net from "node:net";
import { Response, ResponseType } from "../../shared/response.shared";
import { addVote } from "./addVote";
import { candidates } from "../../constants/candidates";
import { Request } from "../../shared/request.shared";

export function returnVoteResponse(socket: net.Socket, request: Request) {
  addVote(request.content);

  const candidateVoted = candidates.find(
    (candidate) => candidate.id === request.content
  );
  const response: Response = {
    type: ResponseType.RESULT,
    content: `Votou com sucesso no candidato: ${candidateVoted?.name}`,
  };

  socket.write(JSON.stringify(response));
}
