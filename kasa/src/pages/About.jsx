import Header from "../components/Header.jsx";
import Banner from '../components/Banner.jsx';
import Accordeon from "../components/Accordeon.jsx";
import Footer from "../components/Footer.jsx";

const About = () => {
    return <div>
        <Header/>
        <Banner
            image={'../src/assets/about_banner.jpg'}
        />

        <div className='about-container'>
            <Accordeon
                title={'Fiabilité'}
                opened
            >
                <p>{`Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.`}</p>
            </Accordeon>
            <Accordeon
                title={'Respect'}
            >
                <p>{'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'}</p>
            </Accordeon>
            <Accordeon
                title={'Service'}
            >
                <p>{'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N"hésitez pas à nous contacter si vous avez la moindre question.'}</p>
            </Accordeon>
            <Accordeon
                title={'Sécurité'}
            >
                <p>{'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l"hôte qu"au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'}</p>
            </Accordeon>
        </div>

        <Footer/>
    </div>
} 

export default About