import { useEffect, useState } from "react";

export default function AfcNorth (){
    const [quarterbacks,setQuarterbacks] = useState([])

    useEffect(() =>{
        fetch("/afcNorth.JSON").then((response) => response.json()).then((data) => setQuarterbacks(data.quarterbacks))
    },[])

    return(
        <section>
            <ul>
                {
                (quarterbacks.map((quarterbacks)=>(
                    <li key={quarterbacks.name}>
                        {quarterbacks.name}
                    </li>
            )
        )
    )
}
            </ul>
        </section>
    )
}