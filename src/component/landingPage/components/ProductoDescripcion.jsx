import React, { useState } from 'react';
import { Container, Row, Col, List, Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import MyNavbar from './MyNavbar';
import Footer from './footer';
import ProductosDestacados from './ProductosDestacados';
import '@styles/DescripcionProducto.scss';
import Herramienta1 from '@img/Herramienta1.png';

const ProductoDescripcion = () => {
  const [open, setOpen] = useState('');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <>
      <MyNavbar />
      <Container fluid className="contenedor-descripcionproducto">
        <Row>
          <Col xs="12">
            <div className="modulo-contenido-producto">
              <Row>
                <Col xs="12" md="5" className="text-left">
                  <img src={Herramienta1} alt="Imagen Sección 1" className="img-fluid" />
                </Col>

                {/* Línea vertical */}
                <Col xs="0" md="1" className="d-none d-md-block">
                  <div className="vertical-line"></div>
                </Col>

                <Col xs="12" md="6" className="text-left mt-4 mt-md-0">
                  <List type="unstyled">
                    <li>Einhell</li>
                    <li><h4>Taladro atornillador inalámbrico 18V 10mm TC-DC 18/35 Li + batería 1,5 Ah Einhell</h4></li>
                    <li>Codigo: SKU 1243843</li>
                  </List>
                  <hr />
                  <List type="unstyled">
                    <li className='fw-bold'>Características:</li>
                    <li>Amperaje batería:1.5 Ah</li>
                    <li>Mandril:10 mm</li>
                    <li>Torque:35 Nm</li>
                    <li>Velocidades:0 - 550 RPM</li>
                  </List>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <hr />
        <Row className="section-row my-4">
          <Col xs="12" className="text-left">
            <Accordion flush open={open} toggle={toggle}>
              <AccordionItem>
                <AccordionHeader targetId="1">Descripción</AccordionHeader>
                <AccordionBody accordionId="1">
                  <strong>Información detallada del producto.</strong>
                  El taladro-destornillador inalámbrico TC-CD 18/35 Li de Einhell (1 batería de 1,5 Ah) es una popular herramienta para todos los trabajos en el hogar, taller o garaje y forma parte de la innovadora familia Power X-Change. Las baterías PXC se pueden utilizar en todos los dispositivos de la innovadora serie de sistemas de iones de litio en el campo de la jardinería y las herramientas. La tecnología Li-Ion sin riesgo de autodescarga permite una perforación y atornillado potentes de forma flexible e independiente de la toma de corriente, lo que se traduce en que el taladro-destornillador inalámbrico esté siempre listo para usar. Equipado con un par de 35 Nm y 21 niveles de par, la electrónica de velocidad garantiza un trabajo orientado a la aplicación y al material. El portabrocas (10 mm) acopla los accesorios de herramienta adecuados en un instante. Para un funcionamiento óptimo también en lugares oscuros e inaccesibles, la iluminación LED garantiza una visión constantemente perfecta del área de trabajo. El diseño ergonómico y la empuñadura Softgrip, que están diseñados para una manejabilidad máxima y ofrecen una sujeción firme y segura, permiten un trabajo agradable. La entrega incluye una batería PXC de 1,5 Ah y un cargador de una hora.
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="2">Características destacadas</AccordionHeader>
                <AccordionBody accordionId="2">
                  <strong>Lista de características destacadas del producto.</strong>
                  Aquí puedes detallar las características adicionales que hacen único al producto.
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </Col>
        </Row>
        <hr />
        <Row className="p-0 mt-4">
          <Col className="text-center mb-5">
            <div className="text-center my-2"> {/* Cambié my-5 por my-2 */}
              <h3>Productos Similars</h3>
              
            </div>
          </Col>
        </Row>
        <ProductosDestacados />
      </Container>

      <Footer />
    </>
  );
};

export default ProductoDescripcion;
