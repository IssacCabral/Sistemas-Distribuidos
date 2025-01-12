import { OnDataController } from "../../controllers/clients/onData.controller";
import { VoteService } from "../../services/vote.service";
import * as net from "node:net";

export const OnDataControllerFactory = (
  data: Buffer<ArrayBufferLike>,
  client: net.Socket
): OnDataController => {
  const voteService = new VoteService(client);
  return new OnDataController(data, voteService);
};
