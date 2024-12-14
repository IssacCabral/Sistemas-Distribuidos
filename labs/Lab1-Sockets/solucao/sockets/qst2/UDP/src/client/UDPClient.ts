import * as dgram from "dgram";

const serverPort = 7896;
const serverHost = process.env.SERVER_HOST;

const client = dgram.createSocket("udp4");
const message = Buffer.from("Solicitar comunicação com o servidor via UDP.");

let isSocketOpen = true; // Flag para monitorar o estado do socket
let messageCount = 0;

client.on("close", () => {
  isSocketOpen = false; // Atualiza o estado quando o socket for fechado
  console.log("Socket fechado");
});

client.on("message", (msg) => {
  console.log(`Recebido do servidor: ${msg.toString()}`);
});

const sendPacket = () => {
  if (!isSocketOpen) {
    console.log("Socket já foi encerrado, parando envio.");
    return;
  }

  client.send(message, serverPort, serverHost, (err) => {
    if (err) {
      console.error("Erro ao enviar mensagem:", err);
      client.close();
    } else {
      console.log(`${++messageCount} Mensagens Enviadas ao servidor`);
    }
  });

  setImmediate(sendPacket); // Envia pacotes sem intervalo
};

sendPacket();
