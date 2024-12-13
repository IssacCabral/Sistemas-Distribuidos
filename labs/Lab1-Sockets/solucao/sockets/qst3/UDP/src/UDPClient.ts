import * as dgram from "dgram";

const client = dgram.createSocket("udp4");
const serverPort = 6789;
const serverHost = "localhost";
const message = Buffer.from("solicitar data e hora");

client.send(message, serverPort, serverHost, (err) => {
  if (err) {
    console.log(`Erro ao enviar mensagem: ${err.message}`);
    client.close();
  } else {
    console.log(`Mensagem enviada: ${message.toString()}`);
  }
});

client.on("message", (message) => {
  console.log(`Resposta recebida do servidor: ${message.toString()}`);
  client.close();
});

client.on("error", (err) => {
  console.log(`Erro no cliente: ${err.message}`);
  client.close();
});
