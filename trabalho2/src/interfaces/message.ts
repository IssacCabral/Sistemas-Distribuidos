import { MethodNames, ObjectNames } from "./objects";

// Definição do protocolo
export interface Message {
  messageType: number;
  requestId: number;
  objectReference: ObjectNames; // nome do objeto que fornece o serviço
  methodId: MethodNames; // nome do método a ser invocado
  arguments: any[];
}
