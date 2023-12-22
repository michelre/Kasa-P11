import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import { Link } from 'react-router-dom'
import "./404.css";

const Error = () => {
    return <div>
        <Header />

            <div className="error-container">
                <h1 className="error-header">404</h1>
                <p className="error-p">Oups ! La page que vous demandez n'existe pas.</p>
                <Link to="/" className="error-link">Retourner sur la page d'accueil</Link>
            </div>

        <Footer />
    </div>
}

export default Error;
