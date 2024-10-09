import React from 'react';
import { Container } from 'reactstrap'; // Importa Container de Reactstrap para estructurar el layout
import NavBar from '../landingPage/components/navbar';

const InicioSesion = () => {
  return (
    <>
      <NavBar/>
      
       
        <Container className="text-center" style={{ paddingTop: '20px' ,color:'red'}}>
        <h1>Hola, funcionó Inicio de sesión</h1>
        </Container>
    </>
  );
};

export default InicioSesion;

