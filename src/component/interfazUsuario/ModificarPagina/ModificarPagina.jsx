import React, { useState } from 'react';
import { Container, Row, Button, Col } from 'reactstrap';
import '@styles/ModificarPagina.scss';
import MyNavbar from '../components/MyNavbarInicio';
import Footer from '../../landingPage/components/footer';

import LandingPage from './component/ModifcarLandingPage';
import Informacion from './component/ModifcarInformacion';
import PreguntasFrecuentes from './component/ModifcarPreguntasFrecuentes';
import Contacto from './component/ModifcarContacto';

const ModificarPagina = () => {
  const [activeModule, setActiveModule] = useState('LandingPage'); // Define el estado para el módulo activo

  // Función para renderizar el componente según el módulo activo
  const renderModule = () => {
    switch (activeModule) {
      case 'LandingPage':
        return <LandingPage />;
      case 'Informacion':
        return <Informacion />;
      case 'PreguntasFrecuentes':
        return <PreguntasFrecuentes />;
      case 'Contacto':
        return <Contacto />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <>
      <MyNavbar />
      <Container fluid className="Titulo-gestion-fondo">
        <h1 className='titulo-gestion'>Gestion de Landing Page</h1>
      </Container>

      <Container fluid className="botones-fondo">
        <Row className="justify-content-center"> 
          <Col xs="12" md="3" className="container-gestion"> 
            <Button outline  className="gestion-button" onClick={() => setActiveModule('LandingPage')}>Landing Page</Button> 
          </Col> 
          <Col xs="12" md="3" className="container-gestion"> 
            <Button outline className="gestion-button" onClick={() => setActiveModule('Informacion')}>Informacion Empresa</Button> 
          </Col> 
          <Col xs="12" md="3" className="container-gestion"> 
            <Button outline className="gestion-button" onClick={() => setActiveModule('PreguntasFrecuentes')}>Preguntas Frecuentes</Button> 
          </Col> 
          <Col xs="12" md="3" className="container-gestion"> 
            <Button outline className="gestion-button" onClick={() => setActiveModule('Contacto')}>Contacto</Button> 
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
      
      <Container fluid className="p-0">
        <Footer />
      </Container>
    </>
  );
};

export default ModificarPagina;
