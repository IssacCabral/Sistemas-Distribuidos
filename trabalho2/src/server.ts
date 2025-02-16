import express from "express";
import { Request, Response } from "express";
import { Message } from "./interfaces/message";
import { objects } from "./methods/methods";
import { MethodNames, ObjectNames } from "./interfaces/objects";

const app = express();

// Endpoint para processar requisições
app.post("/rpc", (req: Request, res: Response) => {
  const request: Message = req.body;
  console.log("Requisição recebida:", request);

  const objectReference: ObjectNames = request.objectReference;
  const method: MethodNames = request.methodId;

  if (request.messageType !== 0 || !objects[objectReference]?.[method]) {
    res.status(400).json({ error: "Método inválido" });
  }

  const result = objects[objectReference][method](...request.arguments);

  const response: ResponseMessage = {
    messageType: 1,
    requestId: request.requestId,
    result,
  };

  res.json(response);
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor RPC rodando na porta ${PORT}`);
});
