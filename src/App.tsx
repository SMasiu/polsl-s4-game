import { CssBaseline, Stack, ThemeProvider, createTheme } from "@mui/material";
import { Board } from "./components/board/board";
import { PlayerDeck } from "./components/player-deck/player-deck";

const theme = createTheme({});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack spacing={6}>
        <Board />
        <PlayerDeck />
      </Stack>
    </ThemeProvider>
  );
};

export default App;
