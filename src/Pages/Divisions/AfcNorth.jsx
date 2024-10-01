import { useContext, useEffect, useState } from "react";
import { QbApi } from "../../QbAPI";
import { Link } from "react-router-dom";


export default function AfcNorth (){
    const [quarterbacks,setQuarterbacks] = useState([])
    const {toQb, setToQb} = useContext(QbApi)

    useEffect(() =>{
        fetch("/afcNorth.JSON").then((response) => response.json()).then((data) => setQuarterbacks(data.quarterbacks))
    },[])

    return(
        <section>
            <ul >
                {
                (quarterbacks.map((quarterbacks)=>(
                    <li style={{listStyle: "none"}}  key={quarterbacks.name} onClick={()=> setToQb(quarterbacks.name)}>
                        <Link to = "/profile" ><img src={quarterbacks.pic} alt={quarterbacks.name} /></Link>
                        <Link to = "/profile" > <p>{quarterbacks.name}</p></Link>
                    </li>
            )
        )
    )
}
            </ul>
        </section>
    )
}