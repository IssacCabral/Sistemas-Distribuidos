// Tipagem explícita
export type MethodNames = "addProperty" | "listProperties";
export type ObjectNames = "propertyMethods";

export type IObjects = Record<ObjectNames, Record<MethodNames, any>>;
