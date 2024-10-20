import React, { useRef } from 'react';
import { Container, Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import '@styles/style.scss';
import Herramienta1 from '@img/Herramienta1.png';
import { Link } from 'react-router-dom'; //Para la ruta del "ProductosDescripcion"

const ProductosDestacados = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <>
      <Container className="text-center my-5">
        <h3>Productos Recomendados</h3>
        <h5 className='h5Suntitulo'>Productos exclusivos seleccionados para ti</h5>
        <div className="carousel-container mt-4">
          {/* Botón para desplazar a la izquierda */}
          <Button onClick={scrollLeft} className="carousel-control-prev">❮</Button>
          
          {/* Contenedor de las tarjetas */}
          <div className="cards-wrapper" ref={scrollRef}>
            
             {/* Card 1*/}
             <Link to="/producto-descripcion">
              <Card className="custom-card">
                <img alt="Sample" src={Herramienta1} className="custom-card-img" />
                <CardBody>
                  <CardTitle tag="h5">BOSCH Taladro Inalámbrico Percutor</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    13mm 18 V/Llave Impacto 18 V/2 Baterías
                  </CardSubtitle>
                </CardBody>
              </Card>
            </Link>

            {/* Card 2*/}
            <Card className="custom-card">
              <img alt="Sample" src={Herramienta1} className="custom-card-img" />
              <CardBody>
                <CardTitle tag="h5">BOSCH Taladro Inalámbrico Percutor</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  13mm 18 V/Llave Impacto 18 V/2 Baterías
                </CardSubtitle>
              </CardBody>
            </Card>
            {/* Card 3*/}
            <Card className="custom-card">
              <img alt="Sample" src={Herramienta1} className="custom-card-img" />
              <CardBody>
                <CardTitle tag="h5">BOSCH Taladro Inalámbrico Percutor</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  13mm 18 V/Llave Impacto 18 V/2 Baterías
                </CardSubtitle>
              </CardBody>
            </Card>
             {/* Card 4*/}
             <Card className="custom-card">
              <img alt="Sample" src={Herramienta1} className="custom-card-img" />
              <CardBody>
                <CardTitle tag="h5">BOSCH Taladro Inalámbrico Percutor</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  13mm 18 V/Llave Impacto 18 V/2 Baterías
                </CardSubtitle>
              </CardBody>
            </Card>


          </div>

          {/* Botón para desplazar a la derecha */}
          <Button onClick={scrollRight} className="carousel-control-next">❯</Button>
        </div>
      </Container>
    </>
  );
};

export default ProductosDestacados;
