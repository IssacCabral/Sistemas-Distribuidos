import { adminPassword, clientPassword } from "../constants/passwords";
import { question } from "../shared/question.shared";
import { Request, RequestType } from "../shared/request.shared";
import { BaseService } from "./base.service";

export class LoginService extends BaseService {
  async askLogin() {
    const password = await question("Digite a senha:");

    if (password === adminPassword || password === clientPassword) {
      const request: Request = {
        type: RequestType.LOGIN,
        content: "Desejo Logar",
      };
      this.client.write(JSON.stringify(request));
    } else {
      console.log("Senha incorreta! Tente novamente.");
      this.askLogin();
    }
  }
}
