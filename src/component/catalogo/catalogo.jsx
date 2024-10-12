import React from 'react';
import { Container } from 'reactstrap'; // Importa Container de Reactstrap para estructurar el layout
import NavBar from '../landingPage/components/navbar';
import Card from './components/card';
import Sidebar from './components/Sidebar/sidebar';


const Catalogo = () => {
  return (
    <>
      <NavBar/>
      <Sidebar/>
      <Card/>

        <Container className="text-center" style={{ paddingTop: '20px' ,color:'red'}}>
        <h1>Hola, funcionó Catálogo</h1>
        </Container>
    </>
  );
};

export default Catalogo;