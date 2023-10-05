import React from 'react'

function Header() {
  return (
  
      <header>
          <Link to="/">
              <img id="header-logo" src={Logo} alt="Logo Kasa" />
          </Link>
  
          <nav>
              <Link to="/">Accueil</Link>
              <Link to="/about">À propos</Link>
          </nav>
      </header>
  );
}

export default Header
