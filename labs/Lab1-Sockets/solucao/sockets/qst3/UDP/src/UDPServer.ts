import * as dgram from "dgram";

const serverPort = 6789;
const server = dgram.createSocket("udp4");

server.on("message", (_, remote) => {
  const response = new Date().toString();
  server.send(response, remote.port, remote.address, (err) => {
    if (err) {
      console.log(`Erro ao enviar resposta: ${err.message}`);
    } else {
      console.log(`Resposta enviada para ${remote.address}:${remote.port}`);
    }
  });
});

server.on("listening", () => {
  const address = server.address();
  console.log(`Servidor UDP ouvindo na porta ${address.port}`);
});

server.bind(serverPort);
