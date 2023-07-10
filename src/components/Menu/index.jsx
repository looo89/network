
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import React from "react";
import { mainMenuRoutes } from "../../routes/mainMenuRoutes";

import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import ArticleIcon from '@mui/icons-material/Article';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const getIcon = {
    test: <HomeIcon />,
    friends: <GroupIcon />,
    messages: <ChatIcon />,
    news: <ArticleIcon />,
    photos: <InsertPhotoIcon />,
    settings: <SettingsIcon />,
    profile: <AccountCircleIcon />

}

export const Menu = () => {
    return (
        <List>
            {
                mainMenuRoutes().map(route =>

                    <ListItem disablePadding key={route.title}>
                        <ListItemButton component="a" href={route.path}>
                            <ListItemIcon>
                                {getIcon[route.icon]}
                            </ListItemIcon>
                            <ListItemText primary={route.title} />
                        </ListItemButton>
                    </ListItem>
                )
            }
        </List>
    )
}