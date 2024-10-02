import { RouterProvider } from "react-router-dom"
import router from "../router"
import { QbProvider } from "./QbAPI"
import  "./global.css"

function App() {
  
  return(
    <div className="container">
    <QbProvider>
    <RouterProvider router={router}/>
    </QbProvider>
    </div>
  ) 
}
export default App
