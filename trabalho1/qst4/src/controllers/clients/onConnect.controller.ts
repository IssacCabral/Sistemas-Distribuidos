import { MenuService } from "../../services/menu.service";

export class OnConnectController {
  constructor(private readonly menuServìce: MenuService) {}

  async handle() {
    console.log("Conectado ao servidor!");
    this.menuServìce.showMenu();
  }
}
