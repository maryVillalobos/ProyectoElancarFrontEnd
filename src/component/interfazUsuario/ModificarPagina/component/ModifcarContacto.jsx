import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import '@styles/ModificarPagina.scss';

const ModifcarContacto = () => {

  return (
    <>
      <Container className="ModificarLandigpage">
        <Row className="ModificarLandigpage-row my-4">
          <Col xs="12" className="text-left">
            <div className="titulo-con-boton">
              <h3 className="H2-Titulo-ModificarLandigpage">Edición Contacto de Representantes</h3>
              <Input type="select" className="ml-3 select-category">
                <option>Ferretería</option>
                <option>Servicios de Construcción</option>
                <option>Tienda de Materiales de Construcción</option>
              </Input>
            </div>
            <FormGroup>
              <Label for="exampleTitulo">Nombre</Label>
              <Input
                id="exampleTitulo"
                name="text"
                placeholder="Ingrese el Nombre del Representante "
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleTitulo">Correo</Label>
              <Input
                id="exampleTitulo"
                name="text"
                placeholder="Ingrese el correo del Representante"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleTitulo">Teléfono</Label>
              <Input
                id="exampleTitulo"
                name="text"
                placeholder="Ingrese el teléfono del Representante"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleTitulo">Dirección</Label>
              <Input
                id="exampleTitulo"
                name="text"
                placeholder="Ingrese la dirección del Representante"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleTitulo">Horario</Label>
              <Input
                id="exampleTitulo"
                name="text"
                placeholder="Ingrese el Horario de atención del Representante"
                type="text"
              />
            </FormGroup>
            <Button outline className="boton-color">Guardar</Button>
          </Col>
          <hr className="HR-ModificarLandigpage" />
        </Row>
      </Container>
    </>
  );
};

export default ModifcarContacto;
