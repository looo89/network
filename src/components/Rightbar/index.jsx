import { Box } from "@mui/material";
import React from "react";
import Friends from "./Friends";
import Photos from "./Photos";
import Comments from "./Comments";

const Rightbar = () => {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed" width={300}>
                <Friends />
                <Photos />
                <Comments />
            </Box>
        </Box>
    );
}

export default Rightbar;