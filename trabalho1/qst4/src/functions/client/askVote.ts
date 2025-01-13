import { candidates } from "../../constants/candidates";
import { question } from "../../shared/question.shared";
import { Request, RequestType } from "../../shared/request.shared";
import * as net from "node:net";

export async function askVote(client: net.Socket) {
  let continueVoting = true;

  while (continueVoting) {
    const choice = await question("Escolha o ID de um candidato para votar: ");
    const validIDS: string[] = candidates.map((candidate) =>
      candidate.id.toString()
    );

    if (!validIDS.includes(choice)) {
      console.log("ID inválido! Tente novamente.");
    } else {
      continueVoting = false;
      const request: Request = {
        type: RequestType.VOTE,
        content: Number(choice),
      };
      client.write(JSON.stringify(request));
    }
  }
}
