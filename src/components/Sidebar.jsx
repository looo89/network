
import { Box } from "@mui/material";
import React from "react";
import { Menu } from "./Menu";



const Sidebar = () => {
    return (
        <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed">
                <Menu />
            </Box>
        </Box>
    );
};

export default Sidebar;