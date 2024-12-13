import * as dgram from "dgram";

const server = dgram.createSocket("udp4");

const clients: { address: string; port: number }[] = [];
const serverPort = 7896;

server.on("message", (message, rinfo) => {
  console.log(
    `Mensagem recebida de ${rinfo.address}:${rinfo.port}: ${message}`
  );

  const client = clients.find(
    (c) => c.address === rinfo.address && c.port === rinfo.port
  );
  if (!client) {
    clients.push({ address: rinfo.address, port: rinfo.port });
  }

  clients.forEach((client) => {
    if (client.address !== rinfo.address || client.port !== rinfo.port) {
      server.send(message, client.port, client.address, (err) => {
        if (err) console.error("Erro ao enviar mensagem:", err);
      });
    }
  });
});

server.on("listening", () => {
  const address = server.address();
  console.log(`Servidor UDP ouvindo em ${address.address}:${address.port}`);
});

server.on("error", (err) => {
  console.error("Erro no servidor:", err);
  server.close();
});

server.bind(serverPort);
