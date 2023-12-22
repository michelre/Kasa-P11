import Header from "../../components/Header/Header.jsx";
import Banner from '../../components/Banner/Banner.jsx';
import Thumbnail from "../../components/Thumbnail/Thumbnail.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import {useEffect, useState} from "react";
import "./Home.css";

const Home = () => {
    const [logements, setLogements] = useState([]);

    useEffect(() => {
        fetch('/logements.json')
            .then((resp) => resp.json())
            .then((data) => {
                setLogements(data);
            });
    }, []);

    return (
        <div>

            <div className="home-container container">
                <Header/>
                <Banner
                    image={'../src/assets/hero-banner.jpg'}
                    title="Chez vous, partout et ailleurs"
                />
                <div className="card-container">
                    {logements.map((logement) => (
                        <Thumbnail
                            key={logement.id}
                            id={logement.id}
                            name={logement.title}
                            cover={logement.cover}
                            title={logement.title}
                        />
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;