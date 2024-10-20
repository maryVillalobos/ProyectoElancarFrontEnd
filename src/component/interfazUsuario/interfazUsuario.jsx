import React from 'react';
import { Container } from 'reactstrap'; // Importa Container de Reactstrap para estructurar el layout
import MyNavbar from './components/MyNavbarInicio';
import Catalogo from '../catalogo/catalogo';
import Footer from '../landingPage/components/footer';
const Interfaz = () => {
  return (
    <>
      <MyNavbar />
        <Container className="text-center" style={{ paddingTop: '20px' ,color:'red'}}>
        <h1>Hola, funcionó Interfaz Usuario</h1>
        </Container>
      <Footer />
    </>
  );
};

export default Interfaz;