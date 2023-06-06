import { styled } from "@mui/material";

export const StyleBoardTile = styled("section")`
  width: calc(100% / 9);
  height: 50px;

  background-color: #f0f0f0;

  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;
