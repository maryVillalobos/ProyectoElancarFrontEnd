import React from 'react';
import { Container } from 'reactstrap'; // Importa Container de Reactstrap para estructurar el layout

const Interfaz = () => {
  return (
    <>
        <Container className="text-center" style={{ paddingTop: '20px' ,color:'red'}}>
        <h1>Hola, funcionó Interfaz Usuario</h1>
        </Container>
    </>
  );
};

export default Interfaz;