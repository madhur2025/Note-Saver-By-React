import { NavLink } from "react-router-dom";
import './Navbar.css'
function Navbar (){
    return(
        <div className="navbar">
            <h1 id="web-name">NoteSafe</h1>
            <div className="nav-links nonito-fo">
                <NavLink className='nav-items'to="/">Home</NavLink>
                <NavLink className='nav-items'to="/pastes">Pastes</NavLink>
            </div>
        </div>
    )
}
export default Navbar;