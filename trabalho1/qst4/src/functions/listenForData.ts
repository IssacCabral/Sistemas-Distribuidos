import * as net from "node:net";
import { Response, ResponseType } from "../shared/response.shared";

export async function listenForData(client: net.Socket) {
  return new Promise<void>((resolve, reject) => {
    client.on("data", (data) => {
      const response: Response = JSON.parse(data.toString());

      switch (response.type) {
        case ResponseType.CANDIDATES:
          console.log("\nLista de candidatos disponíveis:");
          console.log(response.content); // Mostra os candidatos
          break;

        default:
          console.log("Resposta não reconhecida:", response);
      }

      resolve();
    });

    client.on("error", (err) => {
      console.log("Erro:", err);
      reject(err);
    });
  });
}
