import { question, rl } from "../shared/question.shared";
import { LoginService } from "./login.service";
import { BaseService } from "./base.service";
import * as net from "node:net";

export class MenuService extends BaseService {
  constructor(client: net.Socket, private readonly loginService: LoginService) {
    super(client);
  }

  async showMenu() {
    console.log("\nEscolha uma das opções:");
    console.log("1 - Fazer login");
    console.log("2 - Sair");

    const choice = await question("Digite sua escolha:");

    switch (choice) {
      case "1":
        await this.loginService.askLogin();
        break;
      case "2":
        console.log("Saindo...");
        rl.close();
        this.client.destroy();
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
        this.showMenu();
        break;
    }
  }
}
