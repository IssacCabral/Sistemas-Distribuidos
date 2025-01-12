import * as net from "node:net";

export class BaseService {
  constructor(protected readonly client: net.Socket) {}
}
