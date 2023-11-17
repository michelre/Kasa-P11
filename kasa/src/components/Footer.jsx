import React from 'react'
import Logo from '../assets/logo-footer.png'

function Footer() {
  
  return (
    <footer>
        <div className="container">
            <img id="footer-logo" src={Logo} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    </footer>
  );
}

export default Footer