import { PersonOutputStream } from "./app/personOutputStream";
import { Person } from "./entities/person";

const data: Person[] = [
  {
    age: 10,
    cpf: "1",
    name: "Maria",
  },
  {
    age: 12,
    cpf: "2",
    name: "José",
  },
  {
    age: 13,
    cpf: "3",
    name: "Pedro",
  },
];

const personOutputStream = new PersonOutputStream(data);

personOutputStream.writeSystem();
