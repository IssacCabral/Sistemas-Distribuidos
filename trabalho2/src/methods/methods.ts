import { landlords, properties } from "../database/db";
import { Address, Landlord, Property } from "../entities/property";

export function addProperty(title: string, type: string, price: number) {
  const property: Property = new Property(title, type, price);
  properties.push(property);
  return property;
}

export function listProperties() {
  return properties;
}

export function addLandlord(
  name: string,
  email: string,
  street: string,
  city: string
) {
  const address: Address = new Address(street, city);
  const landlord: Landlord = new Landlord(name, email, properties, address);
  landlords.push(landlord);
  return landlord;
}

export function listLandlords() {
  return landlords;
}
