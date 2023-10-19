import {Link} from "react-router-dom";

const Thumbnail = ({id, name}) => {

    return <Link to={`logements/${id}`}>
        {name}
    </Link>
}

export default Thumbnail