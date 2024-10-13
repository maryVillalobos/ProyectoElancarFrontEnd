import React from 'react';
import { Container, Row, Button } from 'reactstrap'; // Importa Container de Reactstrap para estructurar el layout
import NavBar from '../landingPage/components/navbar';
import '/src/assets/scss/informacion.scss'; 


const Informacion = () => {
  return (
    <>
          <NavBar />
          <Row>
              <Container fluid className="color-blocks-container titulo-empresa">
                  <h1>Empresa</h1>
              </Container>
          </Row>
          <Row>
              <dic className="col-3 container-info">
                  <Button color="warning">
                      Misión
                  </Button>
              </dic>
              <dic className="col-3 container-info">
                  <Button color="warning">
                      Visión
                  </Button>
              </dic>
              <dic className="col-3 container-info">
                  <Button color="warning">
                      Filosofía
                  </Button>
              </dic>
              <dic className="col-3 container-info">
                  <Button color="warning">
                      Contactos
                  </Button>
              </dic>
          </Row>

          <Row>
              <div className="col-6">
                  <h1>Envíenos un mensaje</h1>

              </div>
              <div className="col-6">
                  <h1>Imagen</h1>

              </div>

          </Row>


    </>
  );
};

export default Informacion;