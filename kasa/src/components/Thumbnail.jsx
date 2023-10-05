import {Link} from "react-router-dom";

const Thumbnail = ({id, name}) => {

    return <Link to={`/${id}`}>
        {name}
    </Link>
}

export default Thumbnail