import { adminPassword, clientPassword } from "../constants/passwords";
import { question } from "../shared/question.shared";
import { Request, RequestType } from "../shared/request.shared";
import { BaseService } from "./base.service";

export class LoginService extends BaseService {
  async askLogin() {
    const password = await question("Digite a senha:");

    const request: Request = {
      type: RequestType.LOGIN,
      content: "",
    };

    switch (password) {
      case adminPassword:
        request.content = "admin";
        this.client.write(JSON.stringify(request));
        break;
      case clientPassword:
        request.content = "client";
        this.client.write(JSON.stringify(request));
        break;
      default:
        console.log("Senha incorreta! Tente novamente.");
        this.askLogin();
    }
  }
}
