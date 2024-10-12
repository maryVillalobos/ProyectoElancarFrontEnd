// Landing.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import '@styles/style.scss';
import NavBar from './components/navbar';

const Landing = () => {


  {/*Carrusel */}
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
      <Container fluid className="landing-container">
        {/* Fila 1 carrusel*/}
        <Row className="h-100">
         
          <Col className="col-landing color-block-primary" xs="12" md="12">
            <Carousel activeIndex={activeIndex} next={next} previous={previous} className="w-100">
              <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
          </Col>

        </Row>

        {/* Fila 2*/}
        <Row className="h-100">
          <Col className="col-landing color-block-secondary" xs="12" md="12">
            <h2>Secondary Block</h2>
          </Col>
        </Row>

        {/* Fila 3*/}
        <Row className="h-100">
          <Col className="col-landing color-block-success" xs="12" md="12">
            <h2>Success Block</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Landing;
