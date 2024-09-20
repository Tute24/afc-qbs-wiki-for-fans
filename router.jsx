import { createBrowserRouter } from "react-router-dom";
import RootContainer from "./src/RootContainer";
import AfcEast from "./src/Pages/AfcEast";
import AfcNorth from "./src/Pages/AfcNorth";
import AfcSouth from "./src/Pages/AfcSouth";
import AfcWest from "./src/Pages/AfcWest";

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
    }   
])