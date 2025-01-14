import * as dgram from "node:dgram";
import { UDP_MULTICAST_GROUP, UDP_PORT } from "../../constants/udpConfig";

export function startListeningToMulticast() {
  const udpClient = dgram.createSocket({ type: "udp4", reuseAddr: true });

  udpClient.on("listening", () => {
    const address = udpClient.address();
    console.log(`Cliente ouvindo em ${address.address}:${address.port}`);

    udpClient.addMembership(UDP_MULTICAST_GROUP);
  });

  udpClient.on("message", (message, remote) => {
    console.log(
      `Mensagem recebida de ${remote.address}:${remote.port} - ${message}`
    );
  });

  udpClient.on("error", (err) => {
    console.log(`Erro no cliente: ${err}`);
    udpClient.close();
  });

  udpClient.bind(UDP_PORT, () => {
    console.log(`Cliente agora ouvindo na porta ${UDP_PORT}`);
  });
}
