import { Property } from "../entities/property";
import { DataWriter } from "../interfaces/dataWriter.interface";
import sizeof from "object-sizeof";
import fs from "node:fs";

export class PropertyOutputStream implements DataWriter {
  constructor(private readonly properties: Property[]) {}

  writeSystem(): void {
    const output = this.buildPropertySummary();
    console.log(output);
  }

  writeFile(): void {
    const output = this.buildPropertySummary();

    fs.writeFile("output.txt", output, "utf8", (err) => {
      if (err) {
        console.error("Erro ao escrever no arquivo:", err);
      } else {
        console.log("Arquivo escrito com sucesso!");
      }
    });
  }

  writeTCP(): void {
    throw new Error("Method not implemented.");
  }

  private buildPropertySummary(): string {
    let output = "";
    const propertiesLength = this.properties.length;

    output += `Quantidade de imóveis: ${propertiesLength}\n`;

    for (const property of this.properties) {
      output +=
        `Quantidade de bytes: ${this.calculateSizeOfObject<Property>(
          property
        )}\n` +
        `Título do imóvel: ${property.title}\n` +
        `Tipo de Imóvel: ${property.type}\n` +
        `Preço do imóvel: ${this.formatter(property.price)}\n\n`;
    }

    return output;
  }

  private calculateSizeOfObject<T>(object: T): number {
    return sizeof(object);
  }

  private formatter(value: number): string {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  }
}
