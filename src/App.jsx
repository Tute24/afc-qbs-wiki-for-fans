import { RouterProvider } from "react-router-dom"
import router from "../router"
import { QbProvider } from "./QbAPI"
function App() {
  
  return(
    <QbProvider>
    <RouterProvider router={router}/>
    </QbProvider>
  ) 
}
export default App
