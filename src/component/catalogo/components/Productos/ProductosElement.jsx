import React from 'react';
import { Container, Card, CardHeader, CardBody, CardTitle, CardText, CardFooter, Button } from 'reactstrap'; // Importa Container de Reactstrap para estructurar el layout


const Productos = ({Titulo, Descripcion}) => {
    return (
        <>
            <Card className="my-2" style={{ width: '18rem'}}>
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
        </>
    );
};

export default Productos;
