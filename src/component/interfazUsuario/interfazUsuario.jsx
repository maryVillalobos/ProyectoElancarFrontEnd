import React, { useState } from 'react';
import { Container, Row, Button, Col } from 'reactstrap';
import { useParams } from 'react-router-dom'; // Importa Container de Reactstrap para estructurar el layout
import '@styles/ModificarPagina.scss';
import MyNavbar from './components/MyNavbarInicio';
import Footer from '../landingPage/components/footer';
import Cotizaciones from './cotizaciones/Cotizaciones';

const InterfazCotizaciones = () => {
 
  return (
    <>
      <MyNavbar />
      <Cotizaciones/>
      
      <Container fluid className="p-0">
        <Footer />
      </Container>
    </>
  );
};

export default InterfazCotizaciones;
