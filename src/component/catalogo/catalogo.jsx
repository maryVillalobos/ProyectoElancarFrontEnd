import React from 'react';
import { Container, Row } from 'reactstrap'; // Importa Container de Reactstrap para estructurar el layout
import MyNavbar from '../landingPage/components/MyNavbar';
import ProductosContainer from './components/Productos/ProductosContainer';
import UpperBar from './components/UpperBar/UpperBar';

const Catalogo = () => {
  return (
    <>
    <UpperBar/>
      <MyNavbar/>
      <Row>
         <Sidebar/>
         <ProductosContainer/>
      </Row>
    </>
  );
};

export default Catalogo;