import { useMemo } from "react";
import { GameBoard } from "../../classes/tile/board";
import { BoardTile } from "../board-tile/board-tile";
import { StyledBoard } from "./board.styles";

const board = new GameBoard();

export const Board = () => {
  const boardTile = useMemo(() => board.tiles.flat(), []);

  console.log(boardTile);

  return (
    <StyledBoard>
      {boardTile.map((tile) => (
        <BoardTile key={tile.id} />
      ))}
    </StyledBoard>
  );
};
