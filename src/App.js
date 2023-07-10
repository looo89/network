import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import { useState } from "react";



function App() {
  const [mode, setMode] = useState("light")
  const darkTheme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#8C78C0',
        light: '#777'
      },
      secondary: {
        main: '#EBC8D9',
      },
      otherColor: {
        main: "#EAE9E5",
      }

    }
  })


  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar mode={mode} setMode={setMode} />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
