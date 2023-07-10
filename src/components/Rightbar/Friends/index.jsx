import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import React from "react";


const Friends = () => {
    return (
        <Box>
            <Typography variant="h6" fontWeight={100}>Online friends</Typography>
            <AvatarGroup max={7}>
                <Avatar alt="Remy Sharp" src="/images/avatar.jpg" />
                <Avatar alt="Travis Howard" src="" />
                <Avatar alt="Cindy Baker" src="/images/avatar.jpg" />
                <Avatar alt="Agnes Walker" src="/images/avatar.jpg" />
                <Avatar alt="Trevor Henderson" src="/images/avatar.jpg" />
                <Avatar alt="Cindy Baker" src="/images/avatar.jpg" />
                <Avatar alt="Agnes Walker" src="/images/avatar.jpg" />
                <Avatar alt="Trevor Henderson" src="/images/avatar.jpg" />
            </AvatarGroup>
        </Box>
    )
}

export default Friends