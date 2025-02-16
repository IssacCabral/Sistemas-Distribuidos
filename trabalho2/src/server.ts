// src/server.ts
import express from "express";
import { RemoteMethodInvoker } from "./remote-invoker";
import { Property } from "./entities/property";
import { addProperty, listProperties } from "./methods/methods";

const app = express();
app.use(express.json());

const rmi = RemoteMethodInvoker.getInstance();

const properties: Property[] = [];

rmi.registerObject("propertyMethods", {
  addProperty,
  listProperties,
});

app.post("/invoke", async (req, res) => {
  await rmi.doOperation(req, res);
});

app.listen(3000, () => {
  console.log("Servidor REST-RMI rodando na porta 3000");
});
