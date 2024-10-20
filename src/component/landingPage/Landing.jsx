import React, { useState } from 'react';
import { Container, Row, Col, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import '@styles/style.scss';
import MyNavbar from './components/MyNavbar';
import Footer from './components/footer'
import ProductosDestacados from './components/ProductosDestacados';
import img1 from '@img/carusel1.jpg'; 
import img2 from '@img/carusel2.jpg';
import img3 from '@img/carusel3.jpg';

const items = [
  {
    src: img1,  // Usa la variable importada directamente
    altText: 'img',
    caption: 'Venta de Ferretería',
    description: 'Encuentra en nuestra ferretería todo lo necesario para tus proyectos: herramientas, equipos y accesorios de las mejores marcas, con asesoría especializada para cada cliente.',
  },
  {
    src: img2,
    altText: 'img',
    caption: 'Venta de Materiales de Construcción',
    description: 'Proveemos materiales de construcción de alta calidad para todo tipo de obras. Desde cemento hasta acabados, todo lo que necesitas para construir con confianza.',
  },
  {
    src: img3,
    altText: 'img',
    caption: 'Servicios de Construcción',
    description: 'Ofrecemos una amplia gama de servicios de construcción, diseñados para garantizar estructuras sólidas y duraderas. Calidad y seguridad son nuestra prioridad en cada proyecto.',
  },
];

const Landing = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="w-100" />
        <div className="custom-caption">
          <h1>{item.caption}</h1>
          <p>{item.description}</p>
        </div>
      </CarouselItem>
    );
  });

  return (
    <>
      <MyNavbar />

      <Container fluid className="p-0 m-0" style={{ marginTop: '0' }}>
        <Row className="p-0 m-0 h-100">
          <Col className="p-0 m-0" xs="12" md="12">
            <div className="full-screen-block">
              <Carousel activeIndex={activeIndex} next={next} previous={previous} className="carousel-centered">
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
              </Carousel>
            </div>
          </Col>
        </Row>

        {/* Otros Bloques */}
        <Row className="h-100">
          <Col className="color-block " xs="12" md="12">
            <div className="full-screen-block">
              <ProductosDestacados />
            </div>
          </Col>

          <Col className="color-block color-block-success" xs="12" md="12">
            <div className="footerlandingpage">
            <Footer />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Landing;
