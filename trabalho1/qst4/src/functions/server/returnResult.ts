import * as net from "node:net";
import { Response, ResponseType } from "../../shared/response.shared";
import { calculateWinner } from "./calculateWinner";
import { electionCloseDate } from "../../servers/TCP/electionCloseDate";
import { timeRemaining } from "./timeRemaining";

export function returnResult(socket: net.Socket) {
  const now = new Date();

  const response: Response = {
    type: ResponseType.RESULT,
    content: "",
  };

  if (now < electionCloseDate) {
    const { days, hours, minutes, seconds } = timeRemaining(now);
    response.content = `Tempo restante: ${days} dias, ${hours} horas, ${minutes} minutos, e ${seconds} segundos.`;
  } else {
    response.content = calculateWinner();
  }

  socket.write(JSON.stringify(response));
}
