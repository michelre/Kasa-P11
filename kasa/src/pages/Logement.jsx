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
            
                <div className="logement-tags">
                    {logement?.tags.map((tag) => (
                        <Tags name={tag} key={tag}/>
                ))}
                </div>
            </div>
            <div className="title-author">
                <Author name={logement.host.name} picture={logement.host.picture}/>
                <Stars rating={logement.rating}/>
            </div>
        </section>

        <section className="informations-logement">
            <Accordeon
                title={'Description'}
            >
                <p>{logement.description}</p>
            </Accordeon>

            <Accordeon
                title={'Equipements'}
            >
                <ul>
                    <li>{logement.equipments}</li>
                </ul>
            </Accordeon>
        </section>


    </div>



}
export default Logement