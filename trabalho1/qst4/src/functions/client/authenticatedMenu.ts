import * as net from "node:net";
import { question, rl } from "../../shared/question.shared";
import { askVote } from "./askVote";
import { listenForData } from "./listenForData";
import { fetchCandidates } from "./fetchCandidates";
import { fetchResult } from "./fetchResult";
import { promptClearScreen } from "./promptClear";

export async function authenticatedMenu(client: net.Socket) {
  promptClearScreen(false);

  let continueInteraction = true;

  while (continueInteraction) {
    console.log("\n=== Menu Principal ===");
    console.log("1 - Votar");
    console.log("2 - Listar candidatos");
    console.log("3 - Resultado da eleição");
    console.log("4 - Sair");

    const choice = await question("Escolha uma opção: ");

    switch (choice) {
      case "1": {
        console.log("\n--- Votação ---");
        await askVote(client);
        await listenForData(client);
        await promptClearScreen();
        break;
      }
      case "2": {
        await fetchCandidates(client);
        await listenForData(client);
        await promptClearScreen();
        break;
      }
      case "3":
        await fetchResult(client);
        await listenForData(client);
        await promptClearScreen();
        break;
      case "4": {
        console.log("Saindo do sistema...");
        continueInteraction = false;
        rl.close();
        client.destroy();
        break;
      }
      default:
        console.log("Opção inválida. Tente novamente.");
    }
  }
}
