import { question, rl } from "../shared/question.shared";
import { askLogin } from "../functions/client/askLogin";
import { authenticatedMenu } from "../functions/client/authenticatedMenu";
import { connectClient } from "../functions/client/connectClient";
import { adminMenu } from "../functions/client/adminMenu";
import { startListeningToMulticast } from "../functions/client/startListeningToMulticast";

async function main() {
  try {
    const client = await connectClient();

    let isAuthenticated = false;
    let isAdmin = false;
    while (!isAuthenticated) {
      console.log("\nEscolha uma das opções:");
      console.log("1 - Fazer login");
      console.log("2 - Sair");

      const choice = await question("Digite sua escolha: ");

      switch (choice) {
        case "1": {
          isAdmin = await askLogin();
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

    if (isAuthenticated) {
      startListeningToMulticast();
      if (isAdmin) {
        await adminMenu(client);
      } else {
        await authenticatedMenu(client);
      }
    }
  } catch (err) {
    console.error("Erro de conexão:", err);
  }
}

main();
