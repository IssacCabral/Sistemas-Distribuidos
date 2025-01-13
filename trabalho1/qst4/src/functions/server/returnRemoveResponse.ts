import { candidates } from "../../servers/TCP/database";
import { Request } from "../../shared/request.shared";

export function returnRemoveResponse(request: Request) {
  const candidateID = Number(request.content);
  const candidateIndex = candidates.findIndex(
    (candidate) => candidate.id === candidateID
  );
  candidates.splice(candidateIndex, 1);
}
