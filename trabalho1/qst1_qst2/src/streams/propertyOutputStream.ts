import { Property } from "../entities/property";
import { DataWriter } from "../interfaces/dataWriter.interface";
import sizeof from "object-sizeof";
import fs from "node:fs";
import net from "net";

export class PropertyOutputStream implements DataWriter {
  constructor(
    private readonly properties: Property[],
    private readonly outputStream: NodeJS.WritableStream
  ) {}

  writeSystem(): void {
    this.outputStream.write(this.buildPropertyStream());
  }

  writeFile(): void {
    const output = this.buildPropertyStream();
    fs.writeFileSync("output.txt", output, "utf8");
  }

  writeTCP(): void {
    const output = this.buildPropertyStream();
    const client = net.createConnection(
      { host: "localhost", port: 7896 },
      () => {
        console.log("Conectado ao servidor remoto.");
        client.write(output);
        client.end();
      }
    );

    client.on("error", (err) => {
      console.error("Erro na conexão TCP:", err);
    });
  }

  private buildPropertyStream(): string {
    let output = "";
    const propertiesLength = this.properties.length;

    output += `Quantidade de imóveis: ${propertiesLength}\n\n`;

    for (const property of this.properties) {
      const sizeInBytes = this.calculateSizeOfObject<Property>(property);
      output += `Quantidade de bytes: ${sizeInBytes}\n`;
      output += `Título do imóvel: ${property.title}\n`;
      output += `Tipo de Imóvel: ${property.type}\n`;
      output += `Preço do imóvel: ${this.formatter(property.price)}\n\n`;
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
