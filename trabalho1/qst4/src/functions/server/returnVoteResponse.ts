import * as net from "node:net";
import { Response, ResponseType } from "../../shared/response.shared";
import { addVote } from "./addVote";
import { candidates } from "../../constants/candidates";
import { Request } from "../../shared/request.shared";
import { electionCloseDate } from "../../servers/TCP/electionCloseDate";

export function returnVoteResponse(socket: net.Socket, request: Request) {
  const now = new Date();
  const response: Response = {
    type: ResponseType.RESULT,
    content: "",
  };

  if (now > electionCloseDate) {
    response.content = "A votação já foi encerrada! Apure o resultado!";
  } else {
    addVote(request.content);

    const candidateVoted = candidates.find(
      (candidate) => candidate.id === request.content
    );

    response.content = `Votou com sucesso no candidato: ${candidateVoted?.name}`;
  }
  socket.write(JSON.stringify(response));
}
