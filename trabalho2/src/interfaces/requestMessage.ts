import { MethodNames, ObjectNames } from "./objects";

export interface RequestMessage {
  messageType: number;
  requestId: number;
  objectReference: string; // nome do objeto que fornece o serviço
  methodId: string; // nome do método a ser invocado
  arguments: any[];
}
