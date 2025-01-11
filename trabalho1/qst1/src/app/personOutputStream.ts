import { Person } from "../entities/person";

export class PersonOutputStream {
  constructor(private readonly people: Person[]) {}

  writeSystem(): void {
    let output = "";
    const peopleLength = this.people.length;

    output += `Quantidade de pessoas: ${peopleLength}\n`;

    for (const person of this.people) {
      output +=
        `Nome da pessoa: ${person.name}\n` +
        `CPF: ${person.cpf}\n` +
        `Idade: ${person.age}\n\n`;
    }

    console.log(output);
  }
}
