import { Property, PropertyType } from "../entities/property";
import { IObjects } from "../interfaces/objects";

export const properties: Property[] = [];

function addProperty(title: string, type: PropertyType, price: number) {
  const property: Property = { title, type, price };
  properties.push(property);
  return property;
}

function listProperties() {
  return properties;
}

export const objects: IObjects = {
  propertyMethods: {
    addProperty,
    listProperties,
  },
};
