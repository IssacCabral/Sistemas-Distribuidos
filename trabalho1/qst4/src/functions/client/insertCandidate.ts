import * as net from "node:net";
import { question } from "../../shared/question.shared";
import { Request, RequestType } from "../../shared/request.shared";

export async function insertCandidate(client: net.Socket) {
  const candidateName = await question("Digite o nome do candidato");

  const request: Request = {
    type: RequestType.INSERT,
    content: candidateName,
  };

  client.write(JSON.stringify(request));
}
