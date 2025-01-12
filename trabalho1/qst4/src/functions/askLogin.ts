import { adminPassword, clientPassword } from "../constants/passwords";
import { question } from "../shared/question.shared";

export async function askLogin() {
  let validChoice = false;

  while (!validChoice) {
    const password = await question("Digite a senha:");

    switch (password) {
      case adminPassword:
        validChoice = true;
        break;
      case clientPassword:
        validChoice = true;
        break;
      default:
        console.log("Senha incorreta! Tente novamente.");
    }
  }
}
