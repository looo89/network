import { Box } from "@mui/material";
import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { redirects, routes } from "../routes";

const renderRoutes = () =>
    routes().map(
        route => <Route key={route.path} path={route.path} element={<route.component />} />
    )

const renderRedirects = () =>
    redirects().map((redirect) => (
        <Route path={redirect.from} element={<Navigate to={redirect.to} />} key={redirect.from + redirect.to} />
    ))


const Feed = () => {
    return (

        <Box flex={4} p={2}>
            <Routes>
                {renderRoutes()}
                {renderRedirects()}
            </Routes>
        </Box>

    );
}

export default Feed;