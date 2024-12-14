import * as net from "net";

const serverPort = 7896;
const serverHost = process.env.SERVER_HOST || "localhost";
const client = new net.Socket();

client.connect(serverPort, serverHost, () => {
  console.log("Conectado ao servidor");
  // Envia mensagens em intervalos regulares
  setInterval(() => {
    client.write("Solicitar comunicação com o servidor.");
  }, 10); // Envia mensagens a cada 100ms
});

client.on("data", (data) => {
  console.log("Recebido do servidor: " + data.toString());
});

client.on("close", () => {
  console.log("Conexão fechada");
});

client.on("error", (err) => {
  console.error("Erro no cliente:", err.message);
});
