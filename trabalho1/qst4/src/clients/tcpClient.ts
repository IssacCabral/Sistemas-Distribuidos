import * as net from "node:net";
import { TCP_HOST, TCP_PORT } from "../constants/tcpConfig";
import { rl } from "../shared/question.shared";
import { OnConnectControllerFactory } from "../factory/onConnect.controller.factory";

const client = new net.Socket();

const onConnectController = OnConnectControllerFactory(client);

client.connect(TCP_PORT, TCP_HOST, () => onConnectController.handle());

client.on("data", (data) => {
  const response = JSON.parse(data.toString());
  console.log(`Recebido do servidor: ${JSON.stringify(response, null, 2)}`);
});

client.on("error", (err) => {
  console.log("Erro:", err);
  rl.close();
  client.destroy();
});

client.on("close", () => {
  console.log("Conexão encerrada.");
});
