import { useContext, useEffect, useState } from "react";
import { QbApi } from "../../QbAPI";
import { Link } from "react-router-dom";

export default function AfcSouth (){
    const [quarterbacks,setQuarterbacks] = useState([])
    const {toQb, setToQb} = useContext(QbApi)
    
    useEffect(() =>{
        fetch("/afcSouth.JSON").then((response) => response.json()).then((data) => setQuarterbacks(data.quarterbacks))
    },[])

    return(
        <section>
            <ul>
                {
                (quarterbacks.map((quarterbacks)=>(
                    <li key={quarterbacks.name} onClick={()=> setToQb(quarterbacks.name)}>
                        <Link to="/profile">{quarterbacks.name}</Link>
                    </li>
            )
        )
    )
}
            </ul>
        </section>
    )
}