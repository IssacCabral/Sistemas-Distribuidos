import { VoteService } from "../../services/vote.service";
import { question } from "../../shared/question.shared";
import { Response, ResponseType } from "../../shared/response.shared";

export class OnDataController {
  constructor(
    private readonly data: Buffer<ArrayBufferLike>,
    private readonly voteService: VoteService
  ) {}

  async handle() {
    const response: Response = JSON.parse(this.data.toString());

    switch (response.type) {
      case ResponseType.CANDIDATES:
        console.log("Lista de candidatos");
        console.log(response.content);

        await this.voteService.askVote();
        break;
      case ResponseType.VOTE_RESULT:
        console.log("Resultado dos votos...");
        console.log(response.content);
        break;
      default:
        console.log("Responsa não mapeada...");
    }
  }
}
