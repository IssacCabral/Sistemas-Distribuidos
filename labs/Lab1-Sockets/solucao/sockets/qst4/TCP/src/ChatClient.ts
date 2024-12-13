import * as net from "net";
import * as readline from "readline";

const client = new net.Socket();
const serverPort = 7896;
const serverHost = "localhost";

client.connect(serverPort, serverHost, () => {
  console.log("Conectado ao servidor!");
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> ",
});

rl.on("line", (line) => {
  client.write(line);
  rl.prompt();
});

client.on("data", (data) => {
  console.log(`Mensagem recebida: ${data.toString()}`);
  rl.prompt();
});

client.on("end", () => {
  console.log("Desconectado do servidor");
});

client.on("error", (err) => {
  console.error("Erro no cliente:", err);
});
