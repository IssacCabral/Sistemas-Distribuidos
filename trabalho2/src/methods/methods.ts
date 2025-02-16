import { properties } from "../database/properties";
import { Property } from "../entities/property";

export function addProperty(title: string, type: string, price: number) {
  const property: Property = { title, type, price };
  properties.push(property);
  return property;
}

export function listProperties() {
  return properties;
}
