import { useContext, useEffect, useState } from "react";
import { QbApi } from "../QbAPI";
import { Link } from "react-router-dom";
import css from "../application.module.css"

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
                <Link to = "/AfcEast"><button className={css.goBackButton} type="button"><img src="/Arrow.png" alt="Go Back Button" /></button></Link>
                </>
            )}
        else if(selectedQb.division === "AFC West") {
            return(
                <>
                <Link to = "/AfcWest"><button className={css.goBackButton} type="button"><img src="/Arrow.png" alt="Go Back Button" /></button></Link>
                </>
            )}
            else if(selectedQb.division === "AFC North") {
                return(
                    <>
                    <Link to = "/AfcNorth"><button className={css.goBackButton} type="button"><img src="/Arrow.png" alt="Go Back Button" /></button></Link>
                    </>
                )}
                else if(selectedQb.division === "AFC South") {
                    return(
                        <>
                        <Link to = "/AfcSouth"><button className={css.goBackButton} type="button"><img src="/Arrow.png" alt="Go Back Button" /></button></Link>
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
                    <h2 className={css.header}>
                        <img className={css.playerPic} src={selectedQb.pic} alt={selectedQb.name} />
                        <p className={css.playerName}>{selectedQb.name}</p>
                    </h2>
                )}
                <ul className={css.playerInfos} style={{listStyle: "none"}}>
                    {selectedQb &&(
                        <>
                    <li ><span>Full Name:</span> {selectedQb.fullName}</li>
                    <li ><span>Birth Place:</span> {selectedQb.fromCity}</li>
                    <li><span>Height:</span> {selectedQb.height} cm</li>
                    <li><span>Weight:</span> {selectedQb.weight} kg</li>
                    <li><span>Drafted in:</span> {selectedQb.draftedIn}, round {selectedQb.round}, pick {selectedQb.pick}, from {selectedQb.almaMater} </li>
                    <li><span>Current Team:</span> {selectedQb.team}</li>
                    <li><span>Jersey Number:</span> {selectedQb.jerseyNumber}</li>
                    <li><span>Teams Played For:</span> {Array.isArray(selectedQb.teamsPlayed) ? selectedQb.teamsPlayed.join(", "): "No"}</li>
                    <li><span>Individual Awards:</span> {(Array.isArray(selectedQb.individualAwards) && selectedQb.individualAwards.length===0) ? "None" : Array.isArray(selectedQb.individualAwards) ? selectedQb.individualAwards.join(", ") : "No"}</li>
                    <li><span>Titles:</span> {(Array.isArray(selectedQb.titles) && selectedQb.titles.length===0) ? "None" : Array.isArray(selectedQb.titles) ? selectedQb.titles.join(", ") : "No"}</li>
                    </>
                    )}
                </ul>
            </section>
        </>
        
    )
 
}