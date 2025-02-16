// Definição do protocolo
interface RequestMessage {
  messageType: number;
  requestId: number;
  objectReference: string;
  methodId: string;
  arguments: any[];
}

interface ResponseMessage {
  messageType: number;
  requestId: number;
  result: any;
}
