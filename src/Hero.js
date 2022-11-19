import PhotoGrid from "./photogrid.svg";
import "./index.css";

export default function Hero(){
    return(
        <section className="Hero">
            <img src={PhotoGrid} className="Photo-Grid" />
    
            <h1 className="Hero-Header">Online Experiences</h1>
            <p className="Hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        
        </section>
    )
}