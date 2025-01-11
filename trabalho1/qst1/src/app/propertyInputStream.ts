import { Property, PropertyType } from "../entities/property";
import { DataReader } from "../interfaces/dataReader.interface";
import readline from "node:readline";

export class PropertyInputStream implements DataReader {
  constructor(
    private readonly properties: Property[],
    private readonly inputStream: NodeJS.ReadableStream
  ) {}

  async readSystem(): Promise<void> {
    const rl = readline.createInterface({
      input: this.inputStream,
      output: process.stdout,
    });

    const question = (query: string): Promise<string> =>
      new Promise((resolve) =>
        rl.question(query, (answer) => resolve(answer.trim()))
      );

    try {
      console.log("Insira os dados da propriedade:");

      const title = await question("Informe o Título do Imóvel: ");
      const typeInput = await question(
        "Informe o Tipo do imóvel (Casa, Apartamento, Duplex): "
      );
      const priceInput = await question("Informe o Preço do Imóvel: ");

      const type = this.validateType(typeInput);
      const price = this.validatePrice(priceInput);

      const property: Property = {
        title,
        type,
        price,
      };

      this.properties.push(property);

      console.log("Propriedade adicionada com sucesso!");
    } finally {
      rl.close();
    }
  }

  readFile(): void {
    throw new Error("Method not implemented.");
  }

  readTCP(): void {
    throw new Error("Method not implemented.");
  }

  private validateType(input: string): PropertyType {
    const validTypes = ["Casa", "Apartamento", "Duplex"];
    if (!validTypes.includes(input)) {
      throw new Error(
        `Tipo inválido! Os tipos válidos são: ${validTypes.join(", ")}`
      );
    }
    return input as PropertyType;
  }

  private validatePrice(input: string): number {
    const price = parseFloat(input);
    if (isNaN(price) || price <= 0) {
      throw new Error("Preço inválido! Deve ser um número positivo.");
    }
    return price;
  }
}
