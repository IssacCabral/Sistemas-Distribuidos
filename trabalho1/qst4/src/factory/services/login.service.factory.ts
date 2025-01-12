import { LoginService } from "../../services/login.service";
import * as net from "node:net";

export const LoginServiceFactory = (client: net.Socket): LoginService => {
  return new LoginService(client);
};
