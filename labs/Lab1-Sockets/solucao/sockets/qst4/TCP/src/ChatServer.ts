import * as net from "net";

const clients: net.Socket[] = [];

const server = net.createServer((socket) => {
  clients.push(socket);
  console.log("Novo cliente conectado");

  socket.write("Bem-vindo ao chat! Você pode começar a conversar.\n");

  socket.on("data", (data) => {
    console.log(`Mensagem recebida: ${data.toString()}`);
    clients.forEach((client) => {
      if (client !== socket) {
        client.write(data);
      }
    });
  });

  socket.on("end", () => {
    console.log("Cliente desconectado");
    const index = clients.indexOf(socket);
    if (index !== -1) {
      clients.splice(index, 1);
    }
  });

  socket.on("error", (err) => {
    console.error("Erro no socket:", err);
  });
});

const port = 7896;
server.listen(port, () => {
  console.log(`Servidor TCP está ouvindo na porta ${port}`);
});
