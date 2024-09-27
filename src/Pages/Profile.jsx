import { useContext, useEffect, useState } from "react";
import { QbApi } from "../QbAPI";
import { Link } from "react-router-dom";

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

    function returnToDivision(){
        if(selectedQb.division === "AFC East"){
             return(
                <>
                <Link to = "/AfcEast"><button type="button">Go Back</button></Link>
                </>
            )}
        else if(selectedQb.division === "AFC West") {
            return(
                <>
                <Link to = "/AfcWest"><button type="button">Go Back</button></Link>
                </>
            )}
            else if(selectedQb.division === "AFC North") {
                return(
                    <>
                    <Link to = "/AfcNorth"><button type="button">Go Back</button></Link>
                    </>
                )}
                else if(selectedQb.division === "AFC South") {
                    return(
                        <>
                        <Link to = "/AfcSouth"><button type="button">Go Back</button></Link>
                        </>
                    )}
}
        
    return(
       <>  
        <div>
        {returnToDivision()}
        </div>    
        <section>
            {selectedQb &&(
                <h2>
                    <img src={selectedQb.pic} alt={selectedQb.name} />
                    {selectedQb.name}
                </h2>
            )}
            <ul style={{listStyle: "none"}}>
                {selectedQb &&(
                    <>
                <li>Full Name: {selectedQb.fullName}</li>
                <li>Birth Place: {selectedQb.fromCity}</li>
                <li>Height: {selectedQb.height} cm</li>
                <li>Weight: {selectedQb.weight} kg</li>
                <li>Drafted in {selectedQb.draftedIn}, round {selectedQb.round}, pick {selectedQb.pick}, from {selectedQb.almaMater} </li>
                <li>Current Team: {selectedQb.team}</li>
                <li>Jersey Number: {selectedQb.jerseyNumber}</li>
                <li>Teams Played For: {Array.isArray(selectedQb.teamsPlayed) ? selectedQb.teamsPlayed.join(", "): "No"}</li>
                <li>Individual Awards: {(Array.isArray(selectedQb.individualAwards) && selectedQb.individualAwards.length===0) ? "None" : Array.isArray(selectedQb.individualAwards) ? selectedQb.individualAwards.join(", ") : "No"}</li>
                <li>Titles: {(Array.isArray(selectedQb.titles) && selectedQb.titles.length===0) ? "None" : Array.isArray(selectedQb.titles) ? selectedQb.titles.join(", ") : "No"}</li>
                </>
                )}
            </ul>
        </section>
        </>
    )
 
}