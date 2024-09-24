import { Link } from "react-router-dom";

export default function Home(){
    return(
        <section>
        <header>
            <nav>
              <Link to="/AfcEast"> AFC East </Link>
              <Link to="/AfcNorth"> AFC North </Link>
              <Link to="/AfcSouth"> AFC South </Link>
              <Link to="/AfcWest"> AFC West </Link>
            </nav>
        </header>
    </section>
    )
}