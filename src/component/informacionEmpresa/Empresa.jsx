import React, { useState, useEffect } from 'react';
import { Container, Row, Button, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';  // Importa useParams
import MyNavbar from '../landingPage/components/MyNavbar';
import Footer from '../landingPage/components/footer'
import '@styles/empresa.scss';

import Informacion from './components/informacion';
import Preguntas from './components/preguntas';
import Contacto from './components/contacto';

const Empresa = () => {
  // Obtener el parámetro "module" de la URL
  const { module } = useParams();

  // Estado para controlar qué módulo se muestra
  const [activeModule, setActiveModule] = useState('Información');

  // Actualiza el módulo activo según el parámetro de la URL
  useEffect(() => {
    if (module) {
      setActiveModule(module);
    }
  }, [module]);

  // Función para renderizar el módulo seleccionado
  const renderModule = () => {
    switch (activeModule) {
      case 'Información':
        return <Informacion />;
      case 'Preguntas':
        return <Preguntas />;
      case 'Contacto':
        return <Contacto />;
      default:
        return <Informacion />;
    }
  };

  return (
    <>
      <MyNavbar />
      <Container fluid className="empresa-fondo">
        <h1 className='titulo-empresa'>Empresa</h1>
      </Container>

      <Container fluid className="botones-fondo">
        <Row className="justify-content-center"> 
          <Col xs="12" md="3" className="container-info"> 
            <Button outline  className="informacion-button" onClick={() => setActiveModule('Información')}>Información</Button> 
          </Col> 
          <Col xs="12" md="3" className="container-info"> 
            <Button outline className="informacion-button" onClick={() => setActiveModule('Preguntas')}>Preguntas Frecuentes</Button> 
          </Col> 
          <Col xs="12" md="3" className="container-info"> 
            <Button outline className="informacion-button" onClick={() => setActiveModule('Contacto')}>Contacto</Button> 
          </Col> 
        </Row>
      </Container>

      {/* Renderizar el componente del módulo seleccionado */}
      <Container fluid>
        <Row>
          <Col xs="12">
            <div >
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

export default Empresa;
