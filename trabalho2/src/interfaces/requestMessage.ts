import { MethodNames, ObjectNames } from "./objects";

export interface RequestMessage {
  messageType: number;
  requestId: number;
  objectReference: ObjectNames; // nome do objeto que fornece o serviço
  methodId: MethodNames; // nome do método a ser invocado
  arguments: any[];
}
