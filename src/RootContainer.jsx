import { Outlet } from "react-router-dom"
import Home from "./Components/Home"


export default function RootContainer(){
    
    return(
        <div>
            <p  >
                This site gives you some informations about the starting AFC Quarterbacks.
            </p>
            <p >
                Go through the AFC East, AFC West, AFC South and AFC North to know more about the guys who lead their teams.
            </p>
           
            <>
                <Home/>
            </>
            <>
                <Outlet />
            </>
        </div>
    )
}