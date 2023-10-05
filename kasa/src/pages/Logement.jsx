import Header from "../components/Header.jsx";
import {useParams} from "react-router-dom";


const Logement = () => {

    const params = useParams()

    return <div>
        <Header/>

        Logement {params.id}

    </div>
}

export default Logement