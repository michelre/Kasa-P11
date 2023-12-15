import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import { Link } from 'react-router-dom'
import "./404.css";

const Error = () => {
    return <div>
        <Header />
      
            <div class="error-container">
                <h1 class="error-header">404</h1>
                <p class="error-p">Oups ! La page que vous demandez n'existe pas.</p>
                <Link to="/" class="error-link">Retourner sur la page d'accueil</Link>
            </div>

        <Footer />
    </div>
}

export default Error;