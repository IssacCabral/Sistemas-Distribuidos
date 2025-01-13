import { adminPassword, clientPassword } from "../../constants/passwords";
import { question } from "../../shared/question.shared";

export async function askLogin(): Promise<boolean> {
  let validChoice = false;
  let isAdmin = false;

  while (!validChoice) {
    const password = await question("Digite a senha:");

    switch (password) {
      case adminPassword:
        validChoice = true;
        isAdmin = true;
        break;
      case clientPassword:
        validChoice = true;
      default:
        console.log("Senha incorreta! Tente novamente.");
    }
  }

  return isAdmin;
}
