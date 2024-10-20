
import React from 'react';
import { Container, Col, Row, Card, CardTitle, CardBody, CardSubtitle, CardText, Button } from 'reactstrap'; // Importa Container de Reactstrap para estructurar el layout


const DisponiblesProducto = ({Id, nombre, imagen, descripcion}) => {

    return (
        <>
            <Col xs="12" md="4">
                <Card
                    
                >
                    <img
                        alt="Sample"
                        src={imagen} className='producto-disponible-img'
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            {nombre}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Marca
                        </CardSubtitle>
                        <CardText>
                            {descripcion}
                        </CardText>
                        <Button>
                            Añadir
                        </Button>
                    </CardBody>
                </Card>

            </Col>



        </>
    );
};

export default DisponiblesProducto;