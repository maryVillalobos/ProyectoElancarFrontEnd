import React from 'react';
import { Container, Row } from 'reactstrap'; // Importa Container de Reactstrap para estructurar el layout
import NavBar from '../landingPage/components/navbar';
import ProductosContainer from './components/Productos/ProductosContainer';
import Sidebar from './components/Sidebar/sidebar';

const Catalogo = () => {
  return (
    <>
      <NavBar/>
      <Row>
         <Sidebar/>

         <ProductosContainer/>

      </Row>
          
          
    

      
    </>
  );
};

export default Catalogo;