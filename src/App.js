import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import React from "react";

import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useBusca } from "./providers/busca";

function App() {

  const { modo } = useBusca()
  const darkTheme = createTheme({
    palette: {
      mode: modo
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>

      <Box bgcolor={"background.default"} color={'text.primary'}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
