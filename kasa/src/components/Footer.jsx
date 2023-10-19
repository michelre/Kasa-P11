import React from 'react'
import Logo from '../assets/logo-footer.png'

function Footer() {
  
  return (
    <footer>
        <img id="footer-logo" src={Logo} alt="Logo Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer