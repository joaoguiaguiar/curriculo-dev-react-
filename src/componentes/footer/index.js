import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>João Guilherme Rodrigues Aguiar</p>
        <p>Telefone: (61) 99454-0642</p>
        <p>E-mail: joaoguilhermeaguiar@gmail.com</p>
        <div className="footer__links">
          <a href="https://www.linkedin.com/in/jo%C3%A3o-guilherme-rodrigues-aguiar/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/joaoguiaguiarta" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <p>&copy; 2024 Dev Web . Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;