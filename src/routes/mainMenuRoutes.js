
import { lazy } from "react";
import { FRIENDS_ROUTE, MESSAGES_ROUTE, NEWS_ROUTE, PHOTOS_ROUTE, PROFILE_ROUTE, SETTINGS_ROUTE } from "./inboundsRoutes";

const Friends = lazy(() => import("../Pages/Friends"))
const Messages = lazy(() => import("../Pages/Messages"))
const News = lazy(() => import("../Pages/News"))
const Photos = lazy(() => import("../Pages/Photos"))
const Profile = lazy(() => import("../Pages/Profile"))
const Settings = lazy(() => import("../Pages/Settings"))


export const mainMenuRoutes = () =>
    [
        {
            path: PROFILE_ROUTE,
            title: "Profile",
            component: Profile,
            icon: "profile"
        },
        {
            path: MESSAGES_ROUTE,
            title: "Messages",
            component: Messages,
            icon: "messages"
        },
        {
            path: FRIENDS_ROUTE,
            title: "Friends",
            component: Friends,
            icon: "friends"
        },
        {
            path: NEWS_ROUTE,
            title: "News",
            component: News,
            icon: "news"
        },
        {
            path: PHOTOS_ROUTE,
            title: "Photos",
            component: Photos,
            icon: "photos"
        },
        {
            path: SETTINGS_ROUTE,
            title: "Settings",
            component: Settings,
            icon: "settings"
        },

    ]
