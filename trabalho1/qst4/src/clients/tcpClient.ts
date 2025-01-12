import { question, rl } from "../shared/question.shared";
import { askLogin } from "../functions/askLogin";
import { listenForData } from "../functions/listenForData";
import { authenticatedMenu } from "../functions/authenticatedMenu";
import { connectClient } from "../functions/connectClient";
import { Request, RequestType } from "../shared/request.shared";

async function main() {
  try {
    const client = await connectClient();

    let isAuthenticated = false;
    while (!isAuthenticated) {
      console.log("\nEscolha uma das opções:");
      console.log("1 - Fazer login");
      console.log("2 - Sair");

      const choice = await question("Digite sua escolha: ");

      switch (choice) {
        case "1": {
          await askLogin();
          isAuthenticated = true;
          break;
        }
        case "2": {
          console.log("Saindo...");
          rl.close();
          client.destroy();
          return;
        }
        default:
          console.log("Opção inválida. Tente novamente.");
      }
    }

    await authenticatedMenu(client);
  } catch (err) {
    console.error("Erro de conexão:", err);
  }
}

main();
