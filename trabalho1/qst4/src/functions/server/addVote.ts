import { votes } from "../../servers/TCP/database";

export function addVote(candidateId: number) {
  if (votes.has(candidateId)) {
    votes.set(candidateId, votes.get(candidateId)! + 1);
  } else {
    votes.set(candidateId, 1);
  }
}
