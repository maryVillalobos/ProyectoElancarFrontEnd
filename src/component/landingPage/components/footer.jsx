// src/components/MyNavbar.jsx
import React from 'react';
import '@styles/footer.scss';

const Footer = () => {
  

  return (
        <footer className="footer">
        <div className="footer-container">
        <div className="footer-section empresa">
            <h3>Empresa</h3>
            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
                de las industrias desde el año 1500, cuando un impresor 
                (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló</p>
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.5049390496906!2d-68.93569848927355!3d-22.447651779495747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96ac0995a07389e5%3A0xf69e5878591dca25!2sDiego%20de%20Almagro%202589%2C%201393102%20Calama%2C%20Antofagasta!5e0!3m2!1sen!2scl!4v1728851457934!5m2!1sen!2scl" style={{'width':"600", 'height':"450", 'border':'0', 'allowfullscreen':"", 'loading':"lazy", 'referrerpolicy':"no-referrer-when-downgrade"}} ></iframe>
        </div>
        </div>
    </footer>

  );
};

export default Footer;
