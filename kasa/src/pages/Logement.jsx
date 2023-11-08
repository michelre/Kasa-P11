import Header from "../components/Header.jsx";
import {useParams} from "react-router-dom";
import Accordeon from "../components/Accordeon.jsx";
import Author from "../components/Author.jsx";
import Stars from '../components/Stars.jsx';
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

    /*if(!logement){
        return null
    }*/

    return logement && <div>
        <Header/>

        <section className="informations">
            <div className="title-location">
                <h1>{logement.title}</h1>
                <h2>{logement.location}</h2>
            </div>
            <div className="logement-tags">
                {logement?.tags.map((tag) => (
                    <Tags name={tag} key={tag}/>
            ))}
            </div>
        </section>

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

        <Stars rating={logement.rating}/>
        <Author name={logement.host.name} picture={logement.host.picture}/>


        Logement {params.id}

    </div>



}
export default Logement