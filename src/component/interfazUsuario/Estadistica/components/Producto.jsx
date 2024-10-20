import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardFooter, Button, CardSubtitle } from 'reactstrap';
import caruselImage from '../../../../assets/img/carusel1.jpg'; 

const Producto = ({ Titulo, Ventas }) => {
    return (
        <div className="col-md-6 col-sd-12">
            <Card style={{ width: '18rem' }} className="my-2">
                <img
                    alt="Card cap"
                    src={caruselImage} 
                    width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5">{Titulo}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                        Ventas: {Ventas}
                    </CardSubtitle>
                </CardBody>
            </Card>
        </div>
    );
};

export default Producto;
