import Header from "../../components/Header/Header.jsx";
import {useParams} from "react-router-dom";
import Accordeon from "../../components/Accordeon/Accordeon.jsx";
import Author from "../../components/Author/Author.jsx";
import Stars from '../../components/Stars/Stars.jsx';
import Tags from "../../components/Tags/Tags.jsx";
import Slider from "../../components/Slider/Slider.jsx";
import Footer from "../../components/Footer/Footer.jsx"
import {useEffect, useState} from "react";
import "./Logement.css";

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

        <Slider pictures={logement.pictures}/>

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
                    {logement.equipments.map((e, idx) => <li key={`equipment-${idx}`}>{e}</li>)}
                </ul>
            </Accordeon>
        </section>

        <Footer/>

    </div>

}
export default Logement