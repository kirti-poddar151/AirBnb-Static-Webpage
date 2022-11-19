import "./index.css";
// import katie from "./katie.svg";
import star from "./Star.svg";
export default function Card(props){
    let badgeText
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    }
    else if(props.location === "Online"){
        badgeText="ONLINE"
    }
    return (
        <div className="Card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.coverImg} className="Card--image" />
            <div className="Card--text">
            <img src={star}  className="Star"/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>   
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-price"><span className="Bold">From ${props.price}</span>/ person</p>
        </div>
    )
}