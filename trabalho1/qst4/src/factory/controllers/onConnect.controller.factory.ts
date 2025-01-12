import { OnConnectController } from "../../controllers/clients/onConnect.controller";
import { MenuServiceFactory } from "../services/menu.service.factory";
import * as net from "node:net";

export const OnConnectControllerFactory = (
  client: net.Socket
): OnConnectController => {
  const menuService = MenuServiceFactory(client);
  return new OnConnectController(menuService);
};
