import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import './Navbar.css'
function Navbar (){
    return(
        <div className="navbar">
            <h1 id="web-name"><Link to="/pastes">NoteSafe</Link></h1>
            <div className="nav-links nonito-fo">
                <NavLink className='nav-items'to="/">Create</NavLink>
                <NavLink className='nav-items'to="/pastes">Notes</NavLink>
            </div>
        </div>
    )
}
export default Navbar;