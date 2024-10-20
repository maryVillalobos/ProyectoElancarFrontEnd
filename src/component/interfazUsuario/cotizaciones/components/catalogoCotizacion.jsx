import React from 'react';
import { Container, Col, Row } from 'reactstrap'; // Importa Container de Reactstrap para estructurar el layout
import AddedCotizacion from './catalogo/addedCotizacion';
import DisponiblesCotizacion from './catalogo/disponiblesCotizacion';

const CatalogoCotizacion = () => {

  return (
    <>

      <Container className="text-center" style={{ paddingTop: '20px', color: 'red' }}>
        <h1 className='titulo-cotizaciones'>Nueva Cotización</h1>
      </Container>

      <Row>
        <Col xs="12" md="8" >
          <DisponiblesCotizacion/>

        </Col>
        <Col xs="12" md="4">
          <AddedCotizacion/>
        </Col>
      </Row>


    </>
  );
};

export default CatalogoCotizacion;