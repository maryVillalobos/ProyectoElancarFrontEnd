// Landing.jsx
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '@styles/style.scss';
import NavBar from './components/navbar';
const Landing = () => {
  
  
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



