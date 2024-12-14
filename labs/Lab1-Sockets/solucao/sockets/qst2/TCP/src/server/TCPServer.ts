import * as net from "net";

const serverPort = 7896;

const server = net.createServer((socket) => {
  const remoteAddress = socket.remoteAddress?.replace("::ffff:", "");
  console.log("Conexão estabelecida com: " + remoteAddress);

  // Lida com mensagens recebidas do cliente
  socket.on("data", (data) => {
    console.log(
      `Mensagem recebida do cliente ${remoteAddress}: ${data.toString()}`
    );
    const response = "Você se comunicou com o servidor!";
    socket.write(response); // Responde ao cliente
  });

  socket.on("end", () => {
    console.log(`Conexão com o cliente ${remoteAddress} encerrada`);
  });

  socket.on("error", (err) => {
    console.error(`Erro no socket com ${remoteAddress}: ${err.message}`);
  });
});

// Inicia o servidor TCP
server.listen(serverPort, () => {
  console.log(`Servidor TCP ouvindo na porta ${serverPort}`);
});

server.on("error", (err) => {
  console.error("Erro no servidor:", err.message);
});
