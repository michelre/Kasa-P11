import {Link} from "react-router-dom";

/*
const Thumbnail = ({id, name}) => {

    return <Link to={`logements/${id}`}>
        {name}
    </Link>
}
*/

/*
const Thumbnail = ({link, cover, title}) => {
    return(
        <article className="card">
            <Link to={link} className="card_-link">
                <img className="card-image" src={cover} alt={title} />
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
            </Link>
        </article>
    )
}
*/

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