import { createContext, useState } from "react";

export const QbApi = createContext()

export function QbProvider({children}){
    const [toQb, setToQb] = useState(null)

    return(
        <QbApi.Provider value = {{toQb,setToQb}}>
        {children}
        </QbApi.Provider>
    )
}