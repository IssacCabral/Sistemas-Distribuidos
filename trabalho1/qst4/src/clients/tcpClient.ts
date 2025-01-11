import * as net from "node:net";
import { TCP_HOST, TCP_PORT } from "../constants/tcpConfig";
import { Request, RequestType } from "../shared/request";

const client = new net.Socket();

client.connect(TCP_PORT, TCP_HOST, () => {
  console.log("Conectado ao servidor!");

  const request: Request = {
    type: RequestType.LOGIN,
    content: "Desejo Logar",
  };

  client.write(JSON.stringify(request));
});

// Quando o servidor enviar dados, exiba-os
client.on("data", (data) => {
  const response = JSON.parse(data.toString());
  console.log(`Recebido do servidor: ${JSON.stringify(response, null, 2)}`);
  // client.destroy(); // Feche a conexão após receber a resposta, e chama on close
});

// Em caso de erro
client.on("error", (err) => {
  console.log("Erro:", err);
});

// Quando a conexão for fechada
client.on("close", () => {
  console.log("Conexão encerrada.");
});
