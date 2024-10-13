// src/components/MyNavbar.jsx
import React from 'react';
import '../../../assets/scss/footer.scss'; 

const Footer = () => {
  

  return (
        <footer className="footer">
        <div className="footer-container">
        <div className="footer-section empresa">
            <h3>Empresa</h3>
            <p>Lorem Ipsum es simplemente el texto de relleno...</p>
        </div>
        <div className="footer-section contacto">
            <h3>Contacto</h3>
            <p>Dirección: Diego de Almagro 2589, Azcapotzalco, CDMX</p>
            <p>Tel: 551 231 5474</p>
            <p>Email: elmar@correo</p>
        </div>
        <div className="footer-section horarios">
            <h3>Horarios</h3>
            <p>Lunes-Viernes: 9 a.m. - 7 p.m.</p>
            <p>Sábados: 9 a.m. - 1:30 p.m.</p>
            <p>Domingo: Cerrado</p>
        </div>
        <div className="footer-section mapa">
            <h3>Tienda Principal</h3>
            <img src="ruta-del-mapa.jpg" alt="Mapa" />
        </div>
        </div>
    </footer>

  );
};

export default Footer;
