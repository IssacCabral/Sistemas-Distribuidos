import * as net from "net";

const serverPort = 7896;

const server = net.createServer((socket) => {
  console.log("Conexão estabelecida com: " + socket.remoteAddress);

  socket.on("data", () => {
    const date = new Date().toString();
    socket.write(date);
  });

  socket.on("end", () => {
    console.log("Conexão fechada");
  });
});

server.listen(serverPort, () => {
  console.log(`Servidor TCP ouvindo na porta ${serverPort}`);
});
