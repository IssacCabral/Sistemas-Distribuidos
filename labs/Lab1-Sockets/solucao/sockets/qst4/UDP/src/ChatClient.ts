import * as dgram from "dgram";
import * as readline from "readline";

const client = dgram.createSocket("udp4");
const serverPort = 7896;
const serverHost = "localhost";

client.bind(() => {
  console.log(`Cliente conectado na porta ${client.address().port}`);
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> ",
});

client.on("message", (message) => {
  console.log(`Mensagem recebida: ${message.toString()}`);
  rl.prompt();
});

rl.on("line", (line) => {
  if (line.trim()) {
    client.send(line, serverPort, serverHost, (err) => {
      if (err) console.error("Erro ao enviar mensagem:", err);
    });
  }
  rl.prompt();
});

client.on("error", (err) => {
  console.error("Erro no cliente:", err);
  client.close();
});

rl.prompt();
