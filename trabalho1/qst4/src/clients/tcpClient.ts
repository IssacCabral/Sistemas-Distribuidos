import * as net from "node:net";
import { TCP_HOST, TCP_PORT } from "../constants/tcpConfig";
import { Request, RequestType } from "../shared/request";
import * as readline from "readline";
import { adminPassword, clientPassword } from "../constants/passwords";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const client = new net.Socket();

const question = (query: string): Promise<string> =>
  new Promise((resolve) =>
    rl.question(query, (answer) => resolve(answer.trim()))
  );

const askLogin = async () => {
  const password = await question("Digite a senha:");

  if (password === adminPassword || password === clientPassword) {
    const request: Request = {
      type: RequestType.LOGIN,
      content: "Desejo Logar",
    };
    client.write(JSON.stringify(request));
  } else {
    console.log("Senha incorreta! Tente novamente.");
    askLogin(); // Chama novamente para tentar outra vez
  }
};

const showMenu = async () => {
  console.log("\nEscolha uma das opções:");
  console.log("1 - Fazer login");
  console.log("2 - Sair");

  const choice = await question("Digite sua escolha:");

  switch (choice) {
    case "1":
      await askLogin(); // Chama a função de login
      break;
    case "2":
      console.log("Saindo...");
      rl.close();
      client.destroy();
      break;
    default:
      console.log("Opção inválida. Tente novamente.");
      showMenu(); // Chama novamente para mostrar o menu
      break;
  }
};

client.connect(TCP_PORT, TCP_HOST, async () => {
  console.log("Conectado ao servidor!");
  await showMenu(); // Exibe o menu assim que a conexão for estabelecida
});

// Quando o servidor enviar dados, exiba-os
client.on("data", (data) => {
  const response = JSON.parse(data.toString());
  console.log(`Recebido do servidor: ${JSON.stringify(response, null, 2)}`);
  // client.destroy(); // Feche a conexão após receber a resposta, e chama on close
});

// Em caso de erro
client.on("error", (err) => {
  console.log("Erro:", err);
  rl.close();
  client.destroy();
});

// Quando a conexão for fechada
client.on("close", () => {
  console.log("Conexão encerrada.");
});
