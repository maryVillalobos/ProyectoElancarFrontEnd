import { React, useState } from 'react';
import { Container, Accordion, Button, Row, Col } from 'reactstrap'; // Importa Container de Reactstrap para estructurar el layout
import AddedProducto from './addedProducto';

const AddedCotizacion = () => {

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

      <Container >
        <Row>
          <Col xs="8" md="8" className='titulo'>
            Productos añadidos

          </Col>
          <Col xs="4" md="4">
            <Button className='btn-limpiar'><i class="bi bi-cart-x"></i> Limpiar</Button>

          </Col>
        </Row>
        <Accordion flush open={open} toggle={toggle} className='added-productos'>
          <AddedProducto Id={1} Cant={5} nombre={"Producto"} descripcion={"Descripción"} />
          <AddedProducto Id={2} Cant={3} nombre={"Producto"} descripcion={"Descripción"} />
          <AddedProducto Id={3} Cant={10} nombre={"Producto"} descripcion={"Descripción"} />
          <AddedProducto Id={4} Cant={2} nombre={"Producto"} descripcion={"Descripción"} />
          <AddedProducto Id={5} Cant={4} nombre={"Producto"} descripcion={"Descripción"} />
          <AddedProducto Id={6} Cant={7} nombre={"Producto"} descripcion={"Descripción"} />
          <AddedProducto Id={7} Cant={9} nombre={"Producto"} descripcion={"Descripción"} />
          <AddedProducto Id={8} Cant={20} nombre={"Producto"} descripcion={"Descripción"} />

        </Accordion>

        <div className='footer'>
          Generar cotización <i class="bi bi-caret-right"></i>
        </div>

      </Container>


    </>
  );
};

export default AddedCotizacion;