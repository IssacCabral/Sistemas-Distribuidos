import * as dgram from "node:dgram";
import { UDP_MULTICAST_GROUP, UDP_PORT } from "../../constants/udpConfig";

const server = dgram.createSocket("udp4");

export function sendMulticastMessage(message: string) {
  server.send(
    message,
    0,
    message.length,
    UDP_PORT,
    UDP_MULTICAST_GROUP,
    (err) => {
      if (err) {
        console.log("Erro ao enviar mensagem:", err);
      } else {
        console.log("Mensagem enviada para multicast!");
      }
    }
  );
}
