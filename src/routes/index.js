import { TEST_ROUTE } from "./inboundsRoutes"
import { mainMenuRoutes } from "./mainMenuRoutes"


export const redirects = () => [
    {
        from: "/",
        to: TEST_ROUTE
    }
]

export const routes = () => {
    return [
        ...mainMenuRoutes(),
        //...recipesRoutes(),
    ]
}