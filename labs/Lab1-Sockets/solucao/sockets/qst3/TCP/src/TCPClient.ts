import * as net from "net";

const serverPort = 7896;
const client = new net.Socket();

client.connect(serverPort, "localhost", () => {
  console.log("Conectado ao servidor");
  client.write("Solicitar data e hora");
});

client.on("data", (data) => {
  console.log("Recebido do servidor: " + data.toString());
  client.destroy();
});

client.on("close", () => {
  console.log("Conexão fechada");
});
