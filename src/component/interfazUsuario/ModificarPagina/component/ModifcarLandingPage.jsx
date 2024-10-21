import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from 'reactstrap';
import '@styles/ModificarPagina.scss';
import ProductosSeleccionados from './componentes/ProductosSeleccionables';

const ModifcarLandingPage = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };

  return (
    <Container className="ModificarLandigpage">
      <Row className="ModificarLandigpage-row my-4">
        <Col xs="12" className="text-left">
            <div className="titulo-con-boton">
              <h3 className="H2-Titulo-ModificarLandigpage">Edición Caruosel</h3>
              <Input type="select" className="ml-3 select-category">
                <option>Primera Imagen</option>
                <option>Segunda Imagen</option>
                <option>Tercera Imagen</option>
              </Input>
            </div>

          <Form>
            <FormGroup>
              <Label for="exampleTitulo">Título del Texto del Carousel</Label>
              <Input
                id="exampleTitulo"
                name="text"
                placeholder="Ingrese el título del primer Carousel (Se recomienda un máximo 34 caracteres)"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Descripción del Carrusel </Label>
              <Input
                id="exampleText"
                name="text"
                placeholder="Ingrese la descripción del primer Carousel (Se recomienda un máximo 240 caracteres)"
                type="textarea"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">Ingrese la primera imagen del Carrusel</Label>
              <Input id="exampleFile" name="file" type="file" />
              <FormText>
                Se recomienda una imagen de tamaño 5760px X 3240px
              </FormText>
            </FormGroup>
            <Button outline className="boton-color">Guardar</Button>
          </Form>
        </Col>

        <hr className="HR-ModificarLandigpage" />
        <Col xs="12" className="text-left">
          <h3 className="H2-Titulo-ModificarLandigpage">Edición Productos Recomendados</h3>
          <ProductosSeleccionados />
        </Col>



        <hr className="HR-ModificarLandigpage" />
        <Col xs="12" className="text-left">
          <div className="titulo">
            <h3 className="H2-Titulo-ModificarLandigpage">Edición Footer</h3>
          </div>
          <Form>
          <h5 className="H5-Titulo-ModificarLandigpage">Edición Empresa</h5> 
            <FormGroup>
              <Label for="exampleText">Descripcion Empresa</Label>
              <Input
                id="exampleText"
                name="text"
                placeholder="Ingrese la descripción de la empresa (Se recomienda maximo 290 caracteres)"
                type="textarea"
              />
            </FormGroup>

            <h5 className="H5-Titulo-ModificarLandigpage">Edición Contacto</h5>
            <FormGroup>
              <Label for="exampleTitulo">Dirección</Label>
                <Input
                  id="exampleTitulo"
                  name="text"
                  placeholder="Ingrese la Nueva direccion"
                  type="text"
                />
            </FormGroup>
            <FormGroup>
              <Label for="exampleTitulo">Telefono</Label>
                <Input
                  id="exampleTitulo"
                  name="text"
                  placeholder="Ingrese el Nuevo Telefono"
                  type="text"
                />
            </FormGroup>
            <FormGroup>
              <Label for="exampleTitulo">Correo</Label>
                <Input
                  id="exampleTitulo"
                  name="text"
                  placeholder="Ingrese el Nuevo Correo"
                  type="text"
                />
            </FormGroup>
            <h5 className="H5-Titulo-ModificarLandigpage">Edición Horario</h5>
            <FormGroup>
              <Label for="exampleTitulo">Horario</Label>
                <Input
                  id="exampleTitulo"
                  name="text"
                  placeholder="Ingrese la Nuevo Horario"
                  type="text"
                />
            </FormGroup>
            
            <Button outline className="boton-color">Guardar</Button>
            <hr className="HR-ModificarLandigpage" />

          </Form>
        </Col>
        
      </Row>
    </Container>
  );
};

export default ModifcarLandingPage;
