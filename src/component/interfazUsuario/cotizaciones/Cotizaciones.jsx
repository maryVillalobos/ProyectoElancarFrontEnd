import React, { useState } from 'react';
import { Container, Row, Button, Col } from 'reactstrap';
import { useParams } from 'react-router-dom'; // Importa Container de Reactstrap para estructurar el layout
import '@styles/cotizaciones.scss';
import CatalogoCotizacion from './components/catalogoCotizacion';
import HistorialCotizacion from './components/historialCotizacion';
import MyNavbar from '../components/MyNavbarInicio';
import Footer from '../../landingPage/components/footer';

const Cotizaciones = () => {
  const [activeModule, setActiveModule] = useState('LandingPage'); // Define el estado para el módulo activo

  // Función para renderizar el componente según el módulo activo
  const renderModule = () => {
    switch (activeModule) {
      case 'catalogoCotizacion':
        return <CatalogoCotizacion />;
      case 'HistorialCotizacion':
        return <HistorialCotizacion />;
      default:
        return <CatalogoCotizacion/>
    }
  };

  return (
    <>
      <Container fluid className="Titulo-gestion-fondo">
        <h1 className='titulo-gestion'>Cotizaciones</h1>
      </Container>

      <Container fluid className="botones-fondo">
        <Row className="justify-content-center"> 
          <Col xs="12" md="6" className="container-gestion"> 
            <Button outline  className="gestion-button" onClick={() => setActiveModule('catalogoCotizacion')}>Nueva Cotización</Button> 
          </Col> 
          <Col xs="12" md="6" className="container-gestion"> 
            <Button outline className="gestion-button" onClick={() => setActiveModule('HistorialCotizacion')}>Historial</Button> 
          </Col> 
         
        </Row>
      </Container>


      {/* Renderizar el componente del módulo seleccionado */}
      <Container fluid>
        <Row>
          <Col xs="12">
            <div>
              {renderModule()}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cotizaciones;
