import { generate2DArray } from "../../utils/array.utils";
import { GameTile } from "./tile";

export class GameBoard {
  tiles: GameTile[][];

  constructor() {
    this.tiles = generate2DArray(9).map((row) => row.map(() => new GameTile()));
  }
}
