
import React from 'react';
import { Container, Col, Row, Button } from 'reactstrap'; // Importa Container de Reactstrap para estructurar el layout
import DisponiblesProducto from './disponiblesProducto';
import SearchBarProductos from './searchBarProducts';
import producto1 from '@img/producto1-img.jpg';
import producto2 from '@img/producto2-img.jpg';
import producto3 from '@img/producto3-img.jpg';

const DisponiblesCotizacion = () => {

  return (
    <>

    <SearchBarProductos/>

      <Row className='available-productos'>
      <DisponiblesProducto Id={1} nombre={"Producto"} descripcion={"Producto para cotización"} imagen={producto1}/>
      <DisponiblesProducto Id={1} nombre={"Producto"} descripcion={"Producto para cotización"} imagen={producto2}/>
      <DisponiblesProducto Id={1} nombre={"Producto"} descripcion={"Producto para cotización"} imagen={producto3}/>
      <DisponiblesProducto Id={1} nombre={"Producto"} descripcion={"Producto para cotización"} imagen={producto2}/>
      <DisponiblesProducto Id={1} nombre={"Producto"} descripcion={"Producto para cotización"} imagen={producto1}/>
      <DisponiblesProducto Id={1} nombre={"Producto"} descripcion={"Producto para cotización"} imagen={producto3}/>
      <DisponiblesProducto Id={1} nombre={"Producto"} descripcion={"Producto para cotización"} imagen={producto3}/>
      <DisponiblesProducto Id={1} nombre={"Producto"} descripcion={"Producto para cotización"} imagen={producto2}/>
      <DisponiblesProducto Id={1} nombre={"Producto"} descripcion={"Producto para cotización"} imagen={producto1}/>

      </Row>
      


    </>
  );
};

export default DisponiblesCotizacion;