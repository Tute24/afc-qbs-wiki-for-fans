import { useContext, useEffect, useState } from "react";
import { QbApi } from "../../QbAPI";
import { Link } from "react-router-dom";
import css from "../../application.module.css"

export default function AfcWest(){
    const [quarterbacks,setQuarterbacks] = useState([])
    const {toQb, setToQb} = useContext(QbApi)

    useEffect(() =>{
        fetch("/afcWest.JSON").then((response) => response.json()).then((data) => setQuarterbacks(data.quarterbacks))
    },[])

    return(
        <section>
            <ul className={css.qbsUl}>
                {
                (quarterbacks.map((quarterbacks)=>(
                    <li style={{listStyle: "none"}} className={css.qbsList} key={quarterbacks.name} onClick={()=>setToQb(quarterbacks.name)}>
                       <Link to = "/profile" ><img src={quarterbacks.pic} alt={quarterbacks.name} /></Link>
                       <Link to = "/profile" style={{textDecoration: "none",textAlign:"center",fontWeight:"bold"}}> {quarterbacks.name}</Link>
                    </li>
            )
        )
    )
}
            </ul>
        </section>
    )
}