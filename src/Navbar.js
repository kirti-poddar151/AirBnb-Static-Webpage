import AirBnbLogo from "./airbnb-logo.svg";
import "./index.css";

export default function Navbar(){
    return(
        <nav className="Navbar" >
            <img src={AirBnbLogo} className="Nav--logo"/>
        </nav>
    )
}