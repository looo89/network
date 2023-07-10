
import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: orange[500],
            light: '#777'
        },
        secondary: {
            main: '#1df248',
        },
        otherColor: {
            main: "#994",
        }
    }
})

