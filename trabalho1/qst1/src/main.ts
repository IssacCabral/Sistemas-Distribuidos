import { PropertyOutputStream } from "./app/propertyOutputStream";
import { Property, PropertyType } from "./entities/property";

const data: Property[] = [
  {
    title: "Casa das Rosas",
    type: PropertyType.HOUSE,
    price: 150000,
  },
  {
    title: "Apartamento das Nuvens",
    type: PropertyType.APARTMENT,
    price: 225000,
  },
  {
    title: "Duplex da Paz",
    type: PropertyType.DUPLEX,
    price: 345000,
  },
];

const outputStream = new PropertyOutputStream(data, process.stdout);

// outputStream.writeSystem();
outputStream.writeFile();
// outputStream.writeTCP();
