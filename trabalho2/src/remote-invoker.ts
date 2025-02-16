// src/rmi-invoker.ts
import express, { Response } from "express";
import { RequestMessage } from "./interfaces/requestMessage";
import { ResponseMessage } from "./interfaces/responseMessage";

export class RemoteMethodInvoker {
  private static instance: RemoteMethodInvoker;
  private objects: Record<string, any> = {};

  private constructor() {}

  public static getInstance(): RemoteMethodInvoker {
    if (!RemoteMethodInvoker.instance) {
      RemoteMethodInvoker.instance = new RemoteMethodInvoker();
    }
    return RemoteMethodInvoker.instance;
  }

  public registerObject(objectName: string, object: any) {
    this.objects[objectName] = object;
  }

  public async doOperation(req: express.Request, res: express.Response) {
    const request: RequestMessage = req.body;
    console.log("Recebendo requisição RMI:", request);

    if (request.messageType !== 0) {
      return res.status(400).json({ error: "Tipo de mensagem inválido" });
    }

    const { objectReference, methodId, arguments: args } = request;

    if (
      this.objects[objectReference] &&
      typeof this.objects[objectReference][methodId] === "function"
    ) {
      const result = this.objects[objectReference][methodId](...args);
      return await this.sendReply(request, result, res);
    }

    return res.status(404).json({ error: "Método não encontrado" });
  }

  private async sendReply(request: RequestMessage, result: any, res: Response) {
    const response: ResponseMessage = {
      messageType: 1,
      requestId: request.requestId,
      result,
    };

    console.log("Enviando resposta RMI:", response);
    return res.json(response);
  }
}
