import React from 'react';
import { Container, Row } from 'reactstrap'; // Importa Container de Reactstrap para estructurar el layout
import MyNavbar from '../landingPage/components/MyNavbar';
import ProductosContainer from './components/Productos/ProductosContainer';
import Sidebar from './components/Sidebar/sidebar';

const Catalogo = () => {
  return (
    <>

      <MyNavbar />
        <Sidebar />

      <Row className='productos-catalogo'>

        <Container>
          <ProductosContainer />
        </Container>
      </Row>

    </>
  );
};

export default Catalogo;