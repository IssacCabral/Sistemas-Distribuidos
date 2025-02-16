// src/server.ts
import express from "express";
import { RemoteMethodInvoker } from "./remote-invoker";
import {
  addLandlord,
  addProperty,
  listLandlords,
  listProperties,
} from "./methods/methods";

const app = express();
app.use(express.json());

const rmi = RemoteMethodInvoker.getInstance();

rmi.registerObject("property", {
  addProperty,
  listProperties,
});

rmi.registerObject("landlord", {
  addLandlord,
  listLandlords,
});

app.post("/invoke", async (req, res) => {
  await rmi.doOperation(req, res);
});

app.listen(3000, () => {
  console.log("Servidor REST-RMI rodando na porta 3000");
});
