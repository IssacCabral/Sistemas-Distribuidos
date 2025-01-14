import * as dgram from "node:dgram";
import { UDP_MULTICAST_GROUP, UDP_PORT } from "../../constants/udpConfig";

const client = dgram.createSocket({ type: "udp4", reuseAddr: true }); // permite que múltiplos sockets compartilhem a mesma porta

// Endereço multicast e porta do grupo

// Inscrevendo-se no grupo multicast
client.on("listening", () => {
  const address = client.address();
  console.log(`Cliente ouvindo em ${address.address}:${address.port}`);

  // Inscreve-se no endereço multicast
  client.addMembership(UDP_MULTICAST_GROUP);
});

// Quando o cliente receber uma mensagem, ele a exibe
client.on("message", (message, remote) => {
  console.log(
    `Mensagem recebida de ${remote.address}:${remote.port} - ${message}`
  );
});

// Tratando erros
client.on("error", (err) => {
  console.log(`Erro no cliente: ${err}`);
  client.close();
});

// Ouvindo na porta e no endereço de multicast
client.bind(UDP_PORT, () => {
  console.log(`Cliente agora ouvindo na porta ${UDP_PORT}`);
});
