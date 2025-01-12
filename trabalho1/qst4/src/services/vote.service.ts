import { candidates } from "../constants/candidates";
import { question } from "../shared/question.shared";
import { Request, RequestType } from "../shared/request.shared";
import { BaseService } from "./base.service";

export class VoteService extends BaseService {
  async askVote() {
    const choice = await question("Escolha o ID de um candidato para votar:");
    const validIDS: string[] = candidates.map((candidate) =>
      candidate.id.toString()
    );

    if (!validIDS.includes(choice)) {
      console.log("ID inválido! digite novamente");
      this.askVote();
    } else {
      const request: Request = {
        type: RequestType.VOTE,
        content: Number(choice),
      };
      this.client.write(JSON.stringify(request));
    }
  }
}
