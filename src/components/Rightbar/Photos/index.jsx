import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";

const Photos = () => {
    return (
        <Box>
            <Typography variant="h6" fontWeight={100} mt={3} mb={2}>
                Latest photos
            </Typography>

            <ImageList cols={3} rowHeight={100} gap={5} >
                <ImageListItem >
                    <img
                        src="/images/sea.jpg"
                        alt=""
                    />
                </ImageListItem>
                <ImageListItem >
                    <img
                        src="/images/sea.jpg"
                        alt=""
                    />
                </ImageListItem>
                <ImageListItem >
                    <img
                        src="/images/sea.jpg"
                        alt=""
                    />
                </ImageListItem>
            </ImageList>
        </Box>
    )
}

export default React.memo(Photos)
