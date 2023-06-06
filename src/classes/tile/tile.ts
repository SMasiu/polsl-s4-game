import { v4 as uuid } from "uuid";

export class GameTile {
  id: string;

  constructor() {
    this.id = uuid();
  }
}
