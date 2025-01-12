import * as net from "node:net";
import { question, rl } from "../shared/question.shared";
import { askVote } from "./askVote";
import { listenForData } from "./listenForData";
import { Request, RequestType } from "../shared/request.shared";
import { fetchCandidates } from "./fetchCandidates";

export async function authenticatedMenu(client: net.Socket) {
  let continueInteraction = true;

  while (continueInteraction) {
    console.log("\n=== Menu Principal ===");
    console.log("1 - Votar");
    console.log("2 - Listar candidatos");
    console.log("3 - Sair");

    const choice = await question("Escolha uma opção: ");

    switch (choice) {
      case "1": {
        console.log("\n--- Votação ---");
        await askVote(client);
        await listenForData(client);
        break;
      }
      case "2": {
        await fetchCandidates(client);
        await listenForData(client);
        break;
      }
      case "3": {
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
