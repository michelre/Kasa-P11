import Header from "../components/Header.jsx";
import {useParams} from "react-router-dom";
import Accordeon from "../components/Accordeon.jsx";
import Tags from "../components/Tags";
import {useEffect, useState} from "react";

const Logement = () => {

    const params = useParams()
    const [logement, setLogement] = useState(null)

    useEffect(() => {
        fetch('/logements.json')
            .then(d => d.json())
            .then(data => {
                data.forEach(d => {
                    if (d.id === params.id)
                    {
                        setLogement(d)
                    }
                });
            })
    }, [])

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

        <div className="logement-tags">
            {logement?.tags.map((tag) => (
                <Tags name={tag} key={tag}/>
            ))}
        </div>
    </div>



}
export default Logement