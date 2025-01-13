import { candidates } from "../../constants/candidates";
import { votes } from "../../servers/TCP/votes";

export function calculateWinner() {
  if (votes.size < 1) {
    return "Não houveram ganhadores";
  }

  let totalVotes = 0;

  for (const [, voteCount] of votes) {
    totalVotes += voteCount;
  }

  let winnerCandidate: { candidateId: number; name: string; votes: number } = {
    candidateId: -1,
    name: "",
    votes: 0,
  };

  const candidatesPercentages: { candidateId: number; percentage: number }[] =
    [];

  for (const [candidateId, voteCount] of votes) {
    if (voteCount > winnerCandidate.votes) {
      winnerCandidate = {
        candidateId,
        name: candidates.find((candidate) => candidate.id === candidateId)!
          .name,
        votes: voteCount,
      };
    }

    const percentage = (voteCount / totalVotes) * 100;
    candidatesPercentages.push({
      candidateId,
      percentage: parseFloat(percentage.toFixed(2)),
    });
  }

  const result = {
    winner: winnerCandidate,
    totalVotes,
    candidatesPercentages,
  };

  return result;
}
