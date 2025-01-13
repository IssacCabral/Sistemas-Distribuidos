import { candidates } from "../../constants/candidates";
import { votes } from "./votes";

export function calculateWinner() {
  let winnerCandidate: { candidateId: number; name: string; votes: number } = {
    candidateId: -1,
    name: "",
    votes: 0,
  };

  for (const [candidateId, voteCount] of votes) {
    if (voteCount > winnerCandidate.votes) {
      winnerCandidate = {
        candidateId,
        name: candidates.find((candidate) => candidate.id === candidateId)!
          .name,
        votes: voteCount,
      };
    }
  }

  return winnerCandidate;
}
