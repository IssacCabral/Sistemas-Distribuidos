import * as readline from "readline";

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const question = (query: string): Promise<string> =>
  new Promise((resolve) =>
    rl.question(query, (answer) => resolve(answer.trim()))
  );
