import express from "express";
import { Address, Landlord, Property } from "./entities/property";
import { landlords, properties } from "./database/db";

const app = express();
app.use(express.json());

app.post("/properties", (req, res) => {
  const body = req.body;
  const newProperty = new Property(body.title, body.type, body.price);
  properties.push(newProperty);
  res.status(201).json(newProperty);
});

app.get("/properties", (_req, res) => {
  res.status(200).json(properties);
});

app.post("/landlords", (req, res) => {
  const body = req.body;
  const address: Address = new Address(body.street, body.city);
  const landlord: Landlord = new Landlord(
    body.name,
    body.email,
    properties,
    address
  );
  landlords.push(landlord);
  res.status(201).json(landlord);
});

app.get("/landlords", (_req, res) => {
  res.status(200).json(landlords);
});

app.listen(3000, () => {
  console.log("Servidor REST-RMI rodando na porta 3000");
});
