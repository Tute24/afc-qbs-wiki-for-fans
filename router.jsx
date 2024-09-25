import { createBrowserRouter } from "react-router-dom";
import RootContainer from "./src/RootContainer";
import AfcEast from "./src/Pages/Divisions/AfcEast";
import AfcNorth from "./src/Pages/Divisions/AfcNorth";
import AfcSouth from "./src/Pages/Divisions/AfcSouth";
import AfcWest from "./src/Pages/Divisions/AfcWest";
import Profile from "./src/Pages/Profile";

    const router = createBrowserRouter([
    {
        path: "/",
        element: <RootContainer/>,
        children:[
            {
                path: "AfcEast",
                element: <AfcEast/>
            },
            {
                path: "AfcNorth",
                element: <AfcNorth/>
            },
            {
                path: "AfcSouth",
                element: <AfcSouth/>
            },
            {
                path: "AfcWest",
                element: <AfcWest/>
            }
        ]
    },
    {
        path: '/profile',
        element: <Profile/>
    }
])

export default router
