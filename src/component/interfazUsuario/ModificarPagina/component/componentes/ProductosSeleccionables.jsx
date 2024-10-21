import React, { useRef, useState } from 'react';
import { Container, Card, CardBody, CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import '@styles/style.scss';
import '@styles/ProductoSeleccionado.scss';
import Herramienta1 from '@img/Herramienta1.png';

const ProductosSeleccionables = () => {
  const scrollRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleModal = () => setModalOpen(!modalOpen);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    toggleModal();
  };

  return (
    <>
      <Container className="text-center ">
        <div className="carousel-container ">
          <Button onClick={scrollLeft} className="carousel-control-prev">❮</Button>
          <div className="cards-wrapper" ref={scrollRef}>
            {/* Ejemplo de producto con funcionalidad de modal */}
            <Card className="custom-card">
              <img alt="Sample" src={Herramienta1} className="custom-card-img" />
              <CardBody>
                <CardTitle tag="h5">BOSCH Taladro Inalámbrico Percutor</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  13mm 18 V/Llave Impacto 18 V/2 Baterías
                </CardSubtitle>
                <Button className="select-button" onClick={() => handleSelectProduct("BOSCH Taladro Inalámbrico Percutor")}>
                  Seleccionar Producto
                </Button>
              </CardBody>
            </Card>

            {/* Tarjetas adicionales sin funcionalidad de modal */}
            <Card className="custom-card">
              <img alt="Sample" src={Herramienta1} className="custom-card-img" />
              <CardBody>
                <CardTitle tag="h5">BOSCH Taladro Inalámbrico Percutor</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  13mm 18 V/Llave Impacto 18 V/2 Baterías
                </CardSubtitle>
                <Button className="select-button">Seleccionar Producto</Button>
              </CardBody>
            </Card>

            <Card className="custom-card">
              <img alt="Sample" src={Herramienta1} className="custom-card-img" />
              <CardBody>
                <CardTitle tag="h5">BOSCH Taladro Inalámbrico Percutor</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  13mm 18 V/Llave Impacto 18 V/2 Baterías
                </CardSubtitle>
                <Button className="select-button">Seleccionar Producto</Button>
              </CardBody>
            </Card>

            <Card className="custom-card">
              <img alt="Sample" src={Herramienta1} className="custom-card-img" />
              <CardBody>
                <CardTitle tag="h5">BOSCH Taladro Inalámbrico Percutor</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  13mm 18 V/Llave Impacto 18 V/2 Baterías
                </CardSubtitle>
                <Button className="select-button">Seleccionar Producto</Button>
              </CardBody>
            </Card>

          </div>
          <Button onClick={scrollRight} className="carousel-control-next">❯</Button>
        </div>

        {/* Modal para el producto seleccionado */}
        <Modal isOpen={modalOpen} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>Producto Seleccionado</ModalHeader>
          <ModalBody>
            {/* Fila de búsqueda */}
            <div className="search-container mb-3">
              <Input 
                type="text" 
                placeholder="Ingrese el dato del producto" 
                className="mr-2 mb-2 mb-md-0" 
              />
              <Input 
                type="select" 
                className="mr-2 mb-2 mb-md-0"
              >
                <option>Buscar por Código</option>
                <option>Buscar por Nombre</option>
              </Input>
              <Button color="primary" className="mb-2 mb-md-0">Buscar</Button>
            </div>
            
            {/* Tabla de resultados */}
            <table className="table">
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Nombre</th>
                  <th>Opción</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>Taladro Inalámbrico</td>
                  <td><Button color="success">Seleccionar</Button></td>
                </tr>
                <tr>
                  <td>002</td>
                  <td>Atornillador Eléctrico</td>
                  <td><Button color="success">Seleccionar</Button></td>
                </tr>
                <tr>
                  <td>003</td>
                  <td>Martillo Neumático</td>
                  <td><Button color="success">Seleccionar</Button></td>
                </tr>
              </tbody>
            </table>
          </ModalBody>
          <ModalFooter>
            <Button color="primary">Guardar</Button>
            <Button color="secondary" onClick={toggleModal}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </Container>
    </>
  );
};

export default ProductosSeleccionables;

