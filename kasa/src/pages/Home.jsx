import Header from "../components/Header.jsx";
import Banner from '../components/Banner.jsx';
import Thumbnail from "../components/Thumbnail.jsx";
import Footer from "../components/Footer.jsx";
import {useEffect, useState} from "react";

const Home = () => {

    const [logements, setLogements] = useState([])

    useEffect(() => {
        fetch('/logements.json')
            .then((resp) => resp.json())
            .then((data) => {
                setLogements(data)
            })
    }, [])

    return <div>
        <Header/>
            <Banner/>
            <div className="card-container">
                {logements.map((logement) => <Thumbnail
                    key={logement.id}
                    id={logement.id}
                    name={logement.title}
                    cover={logement.cover}
                    title={logement.title}
                />)}
            </div>
        <Footer/>

    </div>
}

export default Home