import React from 'react';
import { Container } from 'reactstrap'; 
import MyNavbar from '../components/MyNavbarInicio';
import Grafico from './components/Grafico';
import CardProducto from './components/CardProductos';
import '../scss/Estadistica/Estadistica.scss';

const Estadistica = () => {
  return (
    <>
      <MyNavbar />
      <Container className="estadistica-container"> 
        <div className="grafico-container"> 
          <Grafico />
        </div>
        <div className="productos-container"> 
          <CardProducto />
        </div>
      </Container>
    </>
  );
};

export default Estadistica;
