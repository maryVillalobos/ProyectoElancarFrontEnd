import React from 'react';
import { ListGroup, ListGroupItem, Row, Col } from 'reactstrap';
import '@styles/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Row>
          {/* Empresa Section - Ocupa 3 columnas */}
          <Col xs="12" md="3">
            <div className="footer-section empresa">
              <h4 className='h4-footer'>Empresa</h4>
              <hr className='.hr-footer' />
              <ListGroup className="custom-list">
                <ListGroupItem className="no-background">Con más de 35 años en el mercado, Elancar Ltda. es un referente en la venta de materiales de construcción en Calama. Desde 1987, hemos crecido, expandiendo nuestras operaciones y ofreciendo soluciones confiables a clientes y empresas, con un fuerte compromiso con la calidad.</ListGroupItem>
              </ListGroup>
            </div>

            {/* Firma en la parte inferior */}
            <div className="footer-firma">
              <p>© 2024 Diseño web Elancar</p>
            </div>
          </Col>

          {/* Contacto Section - Ocupa 3 columnas */}
          <Col xs="12" md="3">
            <div className="footer-section contacto">
              <h4 className='h4-footer'>Contacto</h4>
              <hr className='.hr-footer' />
              <ListGroup className="custom-list">
                <ListGroupItem className="no-background">Dirección: Diego de Almagro 2589, Calama, Antofagasta</ListGroupItem>
                <ListGroupItem className="no-background">Tel: 551 231 5474</ListGroupItem>
                <ListGroupItem className="no-background">Email: elmar@correo</ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          {/* Horarios Section - Ocupa 2 columnas */}
          <Col xs="12" md="2">
            <div className="footer-section horarios">
              <h4 className='h4-footer'>Horarios</h4>
              <hr className='.hr-footer' />
              <ListGroup className="custom-list">
                <ListGroupItem className="no-background">Lunes-Viernes: 9 a.m. - 7 p.m.</ListGroupItem>
                <ListGroupItem className="no-background">Sábados: 9 a.m. - 1:30 p.m.</ListGroupItem>
                <ListGroupItem className="no-background">Domingo: Cerrado</ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          {/* Google Map Section - Ocupa 4 columnas */}
          <Col xs="12" md="4">
            <div className="footer-section mapa">
              <h4 className='h4-footer'>Tienda Principal</h4>
              <hr className='.hr-footer'  />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.5049390496906!2d-68.93569848927355!3d-22.447651779495747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96ac0995a07389e5%3A0xf69e5878591dca25!2sDiego%20de%20Almagro%202589%2C%201393102%20Calama%2C%20Antofagasta!5e0!3m2!1ses!2scl!4v1728851457934!5m2!1ses!2scl"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                width="100%"
                height="250px"
              ></iframe>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
