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


const ModifcarInformacion = () => {

  return (
    <>
     
      <Container className="ModificarLandigpage">
        <Row className="ModificarLandigpage-row my-4">
          
          <Col xs="12" className="text-left">
            <div className="titulo">
              <h3 className="H2-Titulo-ModificarLandigpage">Edición Empresa</h3>
            </div>
            <Form>
              <FormGroup>
                <Label for="exampleText">Descripción del Empresa </Label>
                <Input
                  id="exampleText"
                  name="text"
                  placeholder="Ingrese la descripción de la Empresa (Se recomienda un máximo 400 caracteres)"
                  type="textarea"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">Ingrese Imagen de la Empresa</Label>
                <Input id="exampleFile" name="file" type="file" />
                <FormText>
                  Se recomienda una imagen de tamaño 1000px X 600px
                </FormText>
              </FormGroup>
              <Button outline className="boton-color">Guardar</Button>
            </Form>
          </Col>

          <hr className="HR-ModificarLandigpage" />

          <Col xs="12" className="text-left">
            <div className="titulo">
              <h3 className="H2-Titulo-ModificarLandigpage">Edición Visión</h3>
            </div>
            <Form>
              <FormGroup>
                <Label for="exampleText">Descripción del Visión </Label>
                <Input
                  id="exampleText"
                  name="text"
                  placeholder="Ingrese la descripción de la Visión de la Empresa (Se recomienda un máximo 400 caracteres)"
                  type="textarea"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">Ingrese Imagen de la Visión</Label>
                <Input id="exampleFile" name="file" type="file" />
                <FormText>
                  Se recomienda una imagen de tamaño 1000px X 600px
                </FormText>
              </FormGroup>
              <Button outline className="boton-color">Guardar</Button>
            </Form>
          </Col>

          <hr className="HR-ModificarLandigpage" />
          <Col xs="12" className="text-left">
            <div className="titulo">
              <h3 className="H2-Titulo-ModificarLandigpage">Edición Misíon</h3>
            </div>
            <Form>
              <FormGroup>
                <Label for="exampleText">Descripción del Misíon </Label>
                <Input
                  id="exampleText"
                  name="text"
                  placeholder="Ingrese la descripción de la Misíon (Se recomienda un máximo 400 caracteres)"
                  type="textarea"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">Ingrese Imagen de la Misíon</Label>
                <Input id="exampleFile" name="file" type="file" />
                <FormText>
                  Se recomienda una imagen de tamaño 1000px X 600px
                </FormText>
              </FormGroup>
              <Button outline className="boton-color">Guardar</Button>
            </Form>
          </Col>

          <hr className="HR-ModificarLandigpage" />
          <Col xs="12" className="text-left">
            <div className="titulo">
              <h3 className="H2-Titulo-ModificarLandigpage">Edición Filosofía</h3>
            </div>
            <Form>
              <FormGroup>
                <Label for="exampleText">Descripción del Filosofía </Label>
                <Input
                  id="exampleText"
                  name="text"
                  placeholder="Ingrese la descripción de la Filosofía (Se recomienda un máximo 400 caracteres)"
                  type="textarea"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">Ingrese Imagen de la Filosofía</Label>
                <Input id="exampleFile" name="file" type="file" />
                <FormText>
                  Se recomienda una imagen de tamaño 1000px X 600px
                </FormText>
              </FormGroup>
              <Button outline className="boton-color">Guardar</Button>
            </Form>
          </Col>

          <hr className="HR-ModificarLandigpage" />
          
          
          
          
        </Row>
      </Container>
      
    </>
  );
};

export default ModifcarInformacion;