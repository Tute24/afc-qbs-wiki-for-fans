import { useContext, useEffect, useState } from "react";
import { QbApi } from "../QbAPI";

export default function Profile (){
    const { toQb, setToQb } = useContext(QbApi)

    const [quarterbacks,setQuarterbacks] = useState([])
    const [selectedQb, setSelectedQb] = useState([])

    useEffect(() =>{ 
        fetch('/qbs.json').then(response => response.json()).then(data => setQuarterbacks(data.quarterbacks))
        },[]
    )

    useEffect(()=>{
        if(quarterbacks.length>0 && toQb){
        let qb = quarterbacks.find((player) => player.name.trim().toLowerCase() === toQb.trim().toLowerCase())
       setSelectedQb(qb)}
       
    },[quarterbacks,toQb])

    

    return(
        <section>
            <ul>
                {selectedQb &&(
                    <>
                <li>{selectedQb.name}</li>
                <li>{selectedQb.team}</li>
                <li>{selectedQb.jerseyNumber}</li>
                <li>{Array.isArray(selectedQb.teamsPlayed) ? selectedQb.teamsPlayed.join(", "): "No"}</li>
                </>
                )}
            </ul>
        </section>
    )
 
}