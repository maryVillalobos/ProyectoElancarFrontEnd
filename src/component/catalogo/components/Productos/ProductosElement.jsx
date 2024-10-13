import React from 'react';
import { Container, Card, CardHeader, CardBody, CardTitle, CardText, CardFooter, Button } from 'reactstrap'; // Importa Container de Reactstrap para estructurar el layout


const Productos = ({ Titulo, Descripcion }) => {
    return (
        <>
        <div className="col-md-6 col-sd-12">
            <Card className="my-2" >
                <CardHeader>
                    Comparar
                </CardHeader>
                <CardBody>
                    <CardTitle tag="h5">
                        {Titulo}
                    </CardTitle>
                    <CardText>
                        {Descripcion}
                    </CardText>
                    <Button>
                        Añadir
                    </Button>
                </CardBody>
                <CardFooter>
                    Footer
                </CardFooter>
            </Card>
            </div>
        </>
    );
};

export default Productos;
