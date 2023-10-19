import Header from "../components/Header.jsx";
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
        {logements.map((logement) => <Thumbnail
            key={logement.id}
            id={logement.id}
            name={logement.title}
        />)}
        <Footer/>

    </div>
}

export default Home