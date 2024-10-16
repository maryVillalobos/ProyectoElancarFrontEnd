import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import '@styles/empresa.scss'; // Asumiendo que tienes un archivo SCSS para el estilo

const Contacto = () => {
  // Estado para controlar los valores del formulario
  const [formValues, setFormValues] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  // Manejador del cambio de valor en los inputs
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formValues);
    // Aquí podrías agregar la lógica para enviar el mensaje, como una llamada a una API
  };

  return (
    <Container className="contacto-modulo">
      <Row className="section-row-contacto my-4">
        {/* Formulario de Contacto */}
        <Col xs="12" md="6" className="text-left">
          <h2>Envíenos un Correo</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="nombre">Nombre</Label>
              <Input
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Ingrese su nombre"
                value={formValues.nombre}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Correo Electrónico</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Ingrese su correo electrónico"
                value={formValues.email}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="mensaje">Mensaje</Label>
              <Input
                type="textarea"
                name="mensaje"
                id="mensaje"
                placeholder="Escriba su mensaje"
                value={formValues.mensaje}
                onChange={handleChange}
              />
            </FormGroup>
            <Button type="submit" className='button-formulario'>Enviar Mensaje</Button>
          </Form>
        </Col>

        {/* Mapa */}
        <Col xs="12" md="6" className="text-center">
          <h2>Tienda Principal</h2>
          <iframe
            className="iframe-mapa"  
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.5049390496906!2d-68.93569848927355!3d-22.447651779495747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96ac0995a07389e5%3A0xf69e5878591dca25!2sDiego%20de%20Almagro%202589%2C%201393102%20Calama%2C%20Antofagasta!5e0!3m2!1ses!2scl!4v1728851457934!5m2!1ses!2scl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            width="90%"
            height="300px"
          ></iframe>
        </Col>

      </Row>
      <hr />
      
      {/* Sección de Misión */}
      <Row className="section-row my-4">
        <Col xs="12" md="12" className="text-left">
          <h2>Representantes Comerciales</h2>
          <p>“Proveer de soluciones en el ámbito del mercado constructivo, a través de la venta de materiales para construcción, artículos de ferretería y servicios relacionados, que permitan satisfacer en forma eficiente, segura y oportuna las necesidades de nuestros clientes, principalmente concentrados en la provincia del Loa. Capital Calama.”</p>
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

export default Contacto;
