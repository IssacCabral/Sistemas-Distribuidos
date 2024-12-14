import * as dgram from "dgram";

const serverPort = 7896;
const serverHost = process.env.SERVER_HOST || "localhost";
const client = dgram.createSocket("udp4");

const message = Buffer.from("Solicitar comunicação com o servidor via UDP.");

client.send(message, serverPort, serverHost, (err) => {
  if (err) {
    console.error("Erro ao enviar mensagem:", err);
    client.close();
  } else {
    console.log("Mensagem enviada para o servidor");
  }
});

client.on("message", (response) => {
  console.log("Recebido do servidor: " + response.toString());
  client.close();
});

client.on("error", (err) => {
  console.error("Erro no cliente:", err);
  client.close();
});
