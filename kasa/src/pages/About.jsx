import Header from "../components/Header.jsx";
import Banner from '../components/Banner.jsx';
import Tags from "../components/Tags.jsx";
import Footer from "../components/Footer.jsx";

const About = () => {
    return <div>
        <Header/>
        <Banner
            image={'../src/assets/about_banner.jpg'}
        />
        <Tags/>
        <Footer/>
    </div>
}

export default About