import * as net from "node:net";
import { TCP_HOST, TCP_PORT } from "../constants/tcpConfig";

export async function connectClient(): Promise<net.Socket> {
  return new Promise((resolve, reject) => {
    const client = new net.Socket();

    client.connect(TCP_PORT, TCP_HOST, () => {
      console.log("Conectado ao servidor!");
      resolve(client);
    });

    client.on("error", (err) => {
      reject(err);
    });
  });
}
