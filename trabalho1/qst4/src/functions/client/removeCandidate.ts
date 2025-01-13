import * as net from "node:net";
import { question } from "../../shared/question.shared";
import { Request, RequestType } from "../../shared/request.shared";

export async function removeCandidate(client: net.Socket) {
  const candidateID = await question("Digite o ID do candidato para remover: ");

  const request: Request = {
    type: RequestType.REMOVE,
    content: candidateID,
  };

  client.write(JSON.stringify(request));
}
