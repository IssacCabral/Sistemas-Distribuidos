import { Candidate } from "../../interfaces/candidate.interface";

export const votes = new Map<number, number>();
export const candidates: Candidate[] = [
  {
    id: 1,
    name: "Charizard",
  },
  {
    id: 2,
    name: "Venosaur",
  },
  {
    id: 3,
    name: "Blastoise",
  },
];
