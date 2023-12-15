import {Link} from "react-router-dom";
import "./Thumbnail.css";

const Thumbnail = ({id, cover, title}) => {

    return (
        <article className="card">
            <Link to={`logements/${id}`} className="card_-link">
                <img className="card-image" src={cover} /*alt={title}*/ />
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
            </Link>
        </article>
    )
}

export default Thumbnail