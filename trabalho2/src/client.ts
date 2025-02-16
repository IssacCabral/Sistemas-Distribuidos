import axios from "axios";
import { RequestMessage } from "./interfaces/requestMessage";
import { ResponseMessage } from "./interfaces/responseMessage";

async function doOperation(
  objectReference: string,
  methodId: string,
  args: any[]
): Promise<any> {
  const request: RequestMessage = {
    messageType: 0,
    requestId: Math.floor(Math.random() * 1000),
    objectReference,
    methodId,
    arguments: args,
  };

  const response = await axios.post<ResponseMessage>(
    "http://localhost:3000/invoke",
    request
  );

  return response.data;
}

(async () => {
  await doOperation("propertyMethods", "addProperty", [
    "Casa Bonita",
    "Casa",
    300000,
  ]);

  // const properties = await doOperation("propertyMethods", "listProperties", []);
  // console.log("Propriedades cadastradas:", properties);
})();
