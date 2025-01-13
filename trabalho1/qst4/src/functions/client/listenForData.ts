import * as net from "node:net";
import { Response, ResponseType } from "../../shared/response.shared";

export async function listenForData(client: net.Socket) {
  return new Promise<void>((resolve, reject) => {
    const onData = (data: Buffer) => {
      const response: Response = JSON.parse(data.toString());
      switch (response.type) {
        case ResponseType.CANDIDATES:
          console.log(response.content);
          break;
        case ResponseType.RESULT:
          console.log("Resultado: ", response.content);
          break;
        default:
          console.log("Resposta não reconhecida:", response);
      }
      resolve();
    };

    client.once("data", onData); // Usando .once para garantir que só execute uma vez
    client.on("error", (err) => {
      console.log("Erro:", err);
      reject(err);
    });
  });
}
