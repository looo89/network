
import React from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { PROFILE_ROUTE } from "../routes/inboundsRoutes";
import { useNavigate } from "react-router-dom";

const ProfileMenu = ({ open, setOpen }) => {

    const navigate = useNavigate();


    const handleProfileClick = () => {
        navigate(PROFILE_ROUTE)
    }
    return (
        <Menu
            id="profile-menu"
            open={open}
            onClose={(e) => setOpen(false)}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <MenuItem >Name Lastname</MenuItem>
            <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
            <MenuItem>Logout</MenuItem>
        </Menu>
    );
}

export default ProfileMenu;