import logo from "../img/logo.PNG";
import dummy from "../db/dummy.json";
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <div className="header">
            <div>
                <Link to="/"><img className='logo' src={logo} alt="logo"></img></Link>
            </div>
            <div id = 'flex-container1'>
                <ul className="list_week">
                    {dummy.week && dummy.week.map(week => (
                        <Link to={`/week/${week.id}`}>
                            <button className="week" key={week.id}>
                                {week.week}
                            </button>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}