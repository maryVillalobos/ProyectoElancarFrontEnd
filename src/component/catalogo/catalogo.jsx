import React from 'react';
import { Container } from 'reactstrap'; // Importa Container de Reactstrap para estructurar el layout
import NavBar from '../landingPage/components/navbar';

const Catalogo = () => {
  return (
    <>
      <NavBar/>

        <Container className="text-center" style={{ paddingTop: '20px' ,color:'red'}}>
        <h1>Hola, funcionó Catálogo</h1>
        </Container>
    </>
  );
};

export default Catalogo;