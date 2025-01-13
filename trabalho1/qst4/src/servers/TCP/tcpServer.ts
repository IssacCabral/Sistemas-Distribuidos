import * as net from "node:net";
import { TCP_HOST, TCP_PORT } from "../../constants/tcpConfig";
import { RequestType, Request } from "../../shared/request.shared";
import { returnCandidates } from "../../functions/server/returnCandidates";
import { returnResult } from "../../functions/server/returnResult";
import { returnVoteResponse } from "../../functions/server/returnVoteResponse";
import { returnInsertResponse } from "../../functions/server/returnInsertResponse";
import { returnRemoveResponse } from "../../functions/server/returnRemoveResponse";

const server = net.createServer((socket) => {
  console.log("Novo cliente conectado.");

  socket.on("data", (data) => {
    const request: Request = JSON.parse(data.toString());

    switch (request.type) {
      case RequestType.FETCH_CANDIDATES: {
        returnCandidates(socket);
        break;
      }
      case RequestType.FETCH_RESULT: {
        returnResult(socket);
        break;
      }
      case RequestType.VOTE: {
        returnVoteResponse(socket, request);
        break;
      }
      case RequestType.INSERT: {
        returnInsertResponse(request);
        break;
      }
      case RequestType.REMOVE: {
        returnRemoveResponse(request);
        break;
      }
      default: {
        socket.write(
          JSON.stringify({
            message: "Não foi possível identificar o tipo de evento",
          })
        );
      }
    }
  });

  socket.on("end", () => {
    console.log("Cliente desconectado.");
  });

  socket.on("error", (err) => {
    console.log("Erro:", err);
  });
});

server.listen(TCP_PORT, TCP_HOST, () => {
  console.log(`Servidor TCP rodando em ${TCP_HOST}:${TCP_PORT}`);
});
