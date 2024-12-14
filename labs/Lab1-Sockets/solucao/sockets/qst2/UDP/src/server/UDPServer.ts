import * as dgram from "dgram";

const serverPort = 7896;
const server = dgram.createSocket("udp4");

server.on("message", (message, remoteInfo) => {
  const remoteAddress = remoteInfo.address;
  const remotePort = remoteInfo.port;

  console.log(
    `Mensagem recebida de ${remoteAddress}:${remotePort} - ${message.toString()}`
  );

  const response = Buffer.from("Você se comunicou com o servidor via UDP!");
  server.send(response, remotePort, remoteAddress, (err) => {
    if (err) {
      console.error("Erro ao enviar resposta:", err);
    } else {
      console.log(`Resposta enviada para ${remoteAddress}:${remotePort}`);
    }
  });
});

server.on("listening", () => {
  const address = server.address();
  console.log(`Servidor UDP ouvindo na porta ${address.port}`);
});

server.on("error", (err) => {
  console.error("Erro no servidor:", err);
  server.close();
});

server.bind(serverPort);
