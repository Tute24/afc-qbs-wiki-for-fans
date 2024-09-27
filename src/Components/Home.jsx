import { Link } from "react-router-dom";

export default function Home(){
    return(
        <section>
        <header>
            <nav>
                <div className="divisions">
                    <Link to="/AfcEast" style={{textDecoration:"none"}}> <p>AFC East</p> </Link>
                    <Link to="/AfcNorth" style={{textDecoration:"none"}}> <p>AFC North</p> </Link>
                    <Link to="/AfcSouth" style={{textDecoration:"none"}}> <p>AFC South</p> </Link>
                    <Link to="/AfcWest" style={{textDecoration:"none"}}> <p>AFC West</p> </Link>
                </div>
            </nav>
        </header>
    </section>
    )
}