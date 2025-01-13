import { Request } from "../../shared/request.shared";
import { Candidate } from "../../interfaces/candidate.interface";
import { candidates } from "../../servers/TCP/database";

export function returnInsertResponse(request: Request) {
  const id = candidates.length + 1;
  const newCandidate: Candidate = {
    id,
    name: request.content,
  };

  candidates.push(newCandidate);
}
