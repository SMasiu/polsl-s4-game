import { Box, Stack } from "@mui/material";
import { Card } from "../card/card";
import { PlayerHiddenDeck } from "../player-hidden-deck/player-hidden-deck";
import { StyledPlayerDeck } from "./player-deck.styles";

const cards = new Array(5).fill(0);

export const PlayerDeck = () => {
  return (
    <Box>
      <StyledPlayerDeck>
        <Stack spacing={2} direction="row">
          {cards.map((card) => (
            <Card />
          ))}
        </Stack>
        <PlayerHiddenDeck />
      </StyledPlayerDeck>
    </Box>
  );
};
