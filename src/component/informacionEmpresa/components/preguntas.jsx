import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Container,
  Row,
  Col
} from 'reactstrap';
import '@styles/empresa.scss'; // Importa tu archivo SCSS

const Preguntas= () => {
  const [open, setOpen] = useState('');
  
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <Container className='container-preguntas'>
      <Row className="my-4">
        <Col xs="12" className="text-center">
          <h1>Preguntas Frecuentes</h1>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <Accordion flush open={open} toggle={toggle}>
            <AccordionItem className="accordion-item-custom">
              <AccordionHeader targetId="1">¿Cuál es el horario de atención?</AccordionHeader>
              <AccordionBody accordionId="1">
                Nuestro horario de atención es de lunes a viernes de 9 a.m. a 7 p.m., y los sábados de 9 a.m. a 1:30 p.m. Domingos cerramos.
              </AccordionBody>
            </AccordionItem>

            <AccordionItem className="accordion-item-custom">
              <AccordionHeader targetId="2">¿Dónde están ubicados?</AccordionHeader>
              <AccordionBody accordionId="2">
                Estamos ubicados en Diego de Almagro 2589, Calama, Antofagasta.
              </AccordionBody>
            </AccordionItem>

            <AccordionItem className="accordion-item-custom">
              <AccordionHeader targetId="3">¿Hacen envíos a otras regiones?</AccordionHeader>
              <AccordionBody accordionId="3">
                Sí, realizamos envíos a otras regiones, pero los costos y tiempos de entrega pueden variar según la ubicación.
              </AccordionBody>
            </AccordionItem>

            <AccordionItem className="accordion-item-custom">
              <AccordionHeader targetId="4">¿Qué productos ofrecen?</AccordionHeader>
              <AccordionBody accordionId="4">
                Ofrecemos una amplia variedad de materiales de construcción, artículos de ferretería y servicios relacionados.
              </AccordionBody>
            </AccordionItem>

            <AccordionItem className="accordion-item-custom">
              <AccordionHeader targetId="5">¿Tienen servicio de atención personalizada?</AccordionHeader>
              <AccordionBody accordionId="5">
                Sí, contamos con un equipo especializado que brinda atención personalizada para resolver todas tus consultas.
              </AccordionBody>
            </AccordionItem>

            <AccordionItem className="accordion-item-custom">
              <AccordionHeader targetId="6">¿Ofrecen descuentos para compras grandes?</AccordionHeader>
              <AccordionBody accordionId="6">
                Sí, ofrecemos descuentos para compras al por mayor o grandes volúmenes. Contáctanos para más información.
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Preguntas;

