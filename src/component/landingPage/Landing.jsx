import React, { useState } from 'react';
import { Container, Row, Col, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import '@styles/style.scss';
import NavBar from './components/navbar';

const Landing = () => {

  {/* Carrusel */}  
  const items = [
    {
      src: 'https://picsum.photos/id/123/1200/400',
      altText: 'Slide 1',
      caption: 'Slide 1',
      key: 1,
    },
    {
      src: 'https://picsum.photos/id/456/1200/400',
      altText: 'Slide 2',
      caption: 'Slide 2',
      key: 2,
    },
    {
      src: 'https://picsum.photos/id/678/1200/400',
      altText: 'Slide 3',
      caption: 'Slide 3',
      key: 3,
    },
  ];

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
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <>
        <NavBar />
    <Container fluid className="color-blocks-container">
          {/* Fila que contiene los bloques de colores */}
          <Row className="h-100">
            {/* Columna 1 */}
            <Col className="color-block color-block-primary" xs="12" md="12">
              <h2>Primary Block</h2>
            </Col>
    
            {/* Columna 2 */}
            <Col className="color-block color-block-secondary" xs="12" md="12">
              <h2>Secondary Block</h2>
            </Col>
    
            {/* Columna 3 */}
            <Col className="color-block color-block-success" xs="12" md="12">
              <h2>Success Block</h2>
            </Col>
          </Row>
        </Container>
    </>
      );
    };
    export default Landing;
