export enum PropertyType {
  HOUSE = "Casa",
  APARTMENT = "Apartamento",
  DUPLEX = "Duplex",
}

export type Property = {
  title: string;
  type: PropertyType;
  price: number;
};
