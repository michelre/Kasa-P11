import Header from "../components/Header.jsx";
import {useParams} from "react-router-dom";
import Accordeon from "../components/Accordeon.jsx";

const Logement = () => {

    const params = useParams()

    return <div>
        <Header/>
        <Accordeon
            title={'Equipements'}
        >
            <ul>
                <li>Equipement 1</li>
                <li>Equipement 2</li>
            </ul>
        </Accordeon>

        <Accordeon
            title={'Description'}
        >
            <p>Ceci est la description</p>
        </Accordeon>

        Logement {params.id}

    </div>
}

export default Logement