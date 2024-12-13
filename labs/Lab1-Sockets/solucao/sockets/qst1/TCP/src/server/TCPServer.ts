import * as net from "net";

const serverPort = 7896;

const server = net.createServer((socket) => {
  const remoteAddress = socket.remoteAddress?.replace("::ffff:", "");
  console.log("Conexão estabelecida com: " + remoteAddress);

  socket.on("data", () => {
    const response = "Você se comunicou com o servidor!";
    socket.write(response);
  });

  socket.on("end", () => {
    console.log("Conexão fechada");
  });
});

server.listen(serverPort, () => {
  console.log(`Servidor TCP ouvindo na porta ${serverPort}`);
});
