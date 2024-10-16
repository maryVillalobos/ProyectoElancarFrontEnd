import React, { useState, useEffect } from 'react';
import { Container, Row, Button, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';  // Importa useParams
import MyNavbar from '../landingPage/components/MyNavbar';
import Footer from '../landingPage/components/footer'
import '@styles/empresa.scss';

import Informacion from './components/informacion';
import Preguntas from './components/preguntas';
import Contacto from './components/contacto';
import Tiendas from './components/tiendas';

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
      case 'Contactos':
        return <Contacto />;
      case 'Tiendas':
        return <Tiendas />;
      default:
        return <Informacion />;
    }
  };

  return (
    <>
      <MyNavbar />
      <Container fluid className="color-blocks-container titulo-empresa">
        <h1>Empresa</h1>
      </Container>

      <Row className="container-button justify-content-center">
        <Col xs="12" md="3" className="container-info">
          <Button className="informacion-button" onClick={() => setActiveModule('Información')}>Información</Button>
        </Col>
        <Col xs="12" md="3" className="container-info">
          <Button className="informacion-button" onClick={() => setActiveModule('Preguntas')}>Preguntas Frecuentes</Button>
        </Col>
        <Col xs="12" md="3" className="container-info">
          <Button className="informacion-button" onClick={() => setActiveModule('Contactos')}>Contactos</Button>
        </Col>
        <Col xs="12" md="3" className="container-info">
          <Button className="informacion-button" onClick={() => setActiveModule('Tiendas')}>Tiendas</Button>
        </Col>
      </Row>

      {/* Renderizar el componente del módulo seleccionado */}
      <Container fluid className="modulo-contenedor">
        <Row>
          <Col xs="12">
            <div className="modulo-contenido">
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
