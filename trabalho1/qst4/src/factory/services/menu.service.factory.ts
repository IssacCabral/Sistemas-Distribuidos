import { MenuService } from "../../services/menu.service";
import * as net from "node:net";
import { LoginServiceFactory } from "./login.service.factory";

export const MenuServiceFactory = (client: net.Socket): MenuService => {
  const loginService = LoginServiceFactory(client);
  return new MenuService(client, loginService);
};
