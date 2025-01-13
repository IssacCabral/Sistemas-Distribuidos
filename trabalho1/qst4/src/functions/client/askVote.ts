import { candidates } from "../../servers/TCP/database";
import { question } from "../../shared/question.shared";
import { Request, RequestType } from "../../shared/request.shared";
import * as net from "node:net";

export async function askVote(client: net.Socket) {
  const choice = await question("Escolha o ID de um candidato para votar: ");
  const request: Request = {
    type: RequestType.VOTE,
    content: Number(choice),
  };
  client.write(JSON.stringify(request));
}
