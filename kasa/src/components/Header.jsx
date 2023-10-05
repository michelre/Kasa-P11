import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
  
      <header>
          <Link to="/">
              LOGO
              {/*<img id="header-logo" src={Logo} alt="Logo Kasa" />*/}
          </Link>
  
          <nav>
              <Link to="/">Accueil</Link>
              <Link to="/about">À propos</Link>
          </nav>
      </header>
  );
}

export default Header
