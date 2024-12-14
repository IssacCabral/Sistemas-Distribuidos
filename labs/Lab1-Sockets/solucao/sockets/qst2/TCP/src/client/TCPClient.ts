import * as net from "net";

const serverPort = 7896;
const serverHost = process.env.SERVER_HOST || "localhost"; // Usar IP do servidor no Docker
const client = new net.Socket();

client.connect(serverPort, serverHost, () => {
  console.log("Conectado ao servidor");
  client.write("Solicitar comunicação com o servidor.");
});

client.on("data", (data) => {
  console.log("Recebido do servidor: " + data.toString());
  client.destroy();
});

client.on("close", () => {
  console.log("Conexão fechada");
});
