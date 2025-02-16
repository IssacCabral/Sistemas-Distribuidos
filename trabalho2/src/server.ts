// src/server.ts
import express from "express";
import { RemoteMethodInvoker } from "./remote-invoker";
import { Property } from "./entities/property";

const app = express();
app.use(express.json());

const rmi = RemoteMethodInvoker.getInstance();

const properties: Property[] = [];

rmi.registerObject("propertyMethods", {
  addProperty: (title: string, type: string, price: number) => {
    console.log("EXECUTOU????");
    const property = new Property(title, type, price);
    properties.push(property);
    return property;
  },
  listProperties: () => properties,
});

app.post("/invoke", async (req, res) => {
  await rmi.doOperation(req, res);
});

app.listen(3000, () => {
  console.log("Servidor REST-RMI rodando na porta 3000");
});
