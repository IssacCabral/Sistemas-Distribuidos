import * as net from "node:net";
import { TCP_HOST, TCP_PORT } from "../constants/tcpConfig";
import { candidates } from "../constants/candidates";
import { RequestType, Request } from "../shared/request";

const server = net.createServer((socket) => {
  console.log("Novo cliente conectado.");

  socket.on("data", (data) => {
    const request: Request = JSON.parse(data.toString());

    switch (request.type) {
      case RequestType.LOGIN: {
        socket.write(JSON.stringify(candidates)); // Envia uma resposta ao cliente
        break;
      }
      case RequestType.VOTE: {
        socket.write(JSON.stringify({ message: "Você votou no sistema" }));
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
