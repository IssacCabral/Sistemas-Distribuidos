import * as net from "node:net";
import { promptClearScreen } from "./promptClear";
import { question, rl } from "../../shared/question.shared";
import { fetchCandidates } from "./fetchCandidates";
import { listenForData } from "./listenForData";
import { insertCandidate } from "./insertCandidate";
import { removeCandidate } from "./removeCandidate";

export async function adminMenu(client: net.Socket) {
  promptClearScreen(false);

  let continueInteraction = true;

  while (continueInteraction) {
    console.log("\n=== Menu do Admin ===");
    console.log("1 - Inserir Candidato");
    console.log("2 - Listar candidatos");
    console.log("3 - Remover Candidato");
    console.log("4 - Enviar nota informativa");
    console.log("5 - Sair");

    const choice = await question("Escolha uma opção: ");

    switch (choice) {
      case "1":
        console.log("Inserir candidato");
        await insertCandidate(client);
        await promptClearScreen();
        break;
      case "2":
        await fetchCandidates(client);
        await listenForData(client);
        await promptClearScreen();
        break;
      case "3":
        console.log("Remover candidato");
        await removeCandidate(client);
        await promptClearScreen();
        break;
      case "4":
        console.log("Enviar nota informativa...");
        await promptClearScreen();
        break;
      case "5":
        console.log("Saindo do sistema...");
        continueInteraction = false;
        rl.close();
        client.destroy();
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
    }
  }
}
