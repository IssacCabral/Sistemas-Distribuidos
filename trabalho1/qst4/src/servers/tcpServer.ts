import * as net from "node:net";
import { TCP_HOST, TCP_PORT } from "../constants/tcpConfig";
import { candidates } from "../constants/candidates";
import { RequestType, Request } from "../shared/request.shared";
import { Response, ResponseType } from "../shared/response.shared";

let votes: { [key: number]: number } = {};

function addVote(candidateId: number) {
  if (votes[candidateId]) {
    votes[candidateId]++;
  } else {
    votes[candidateId] = 1;
  }
}

const server = net.createServer((socket) => {
  console.log("Novo cliente conectado.");

  socket.on("data", (data) => {
    const request: Request = JSON.parse(data.toString());

    switch (request.type) {
      case RequestType.FETCH_CANDIDATES: {
        const response: Response = {
          type: ResponseType.CANDIDATES,
          content: candidates,
        };
        socket.write(JSON.stringify(response));
        break;
      }
      case RequestType.FETCH_RESULT: {
        const response: Response = {
          type: ResponseType.RESULT,
          content: votes,
        };
        socket.write(JSON.stringify(response));
        break;
      }
      case RequestType.VOTE: {
        addVote(request.content);

        const response: Response = {
          type: ResponseType.RESULT,
          content: `Votou com sucesso no candidato: ${votes[request.content]}`,
        };

        socket.write(JSON.stringify(response));
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
