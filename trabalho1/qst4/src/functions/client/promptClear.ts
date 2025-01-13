import { question } from "../../shared/question.shared";

export async function promptClearScreen(waitForUser: boolean = true) {
  if (waitForUser) {
    await question(
      "Pressione qualquer tecla para limpar o terminal e continuar..."
    );
    console.clear();
  } else {
    console.clear();
  }
}
