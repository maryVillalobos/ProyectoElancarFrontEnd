import React from 'react';
import { Container, Row } from 'reactstrap';
import Producto from './Producto'; 
import '../../scss/Estadistica/CardProducto.scss';

const CardProducto = () => {
    const productos = [
        { Titulo: "Herramienta 1", Ventas: 10 },
        { Titulo: "Herramienta 2", Ventas: 24 },
        { Titulo: "Herramienta 3", Ventas: 54 },
        { Titulo: "Herramienta 4", Ventas: 51 },
        { Titulo: "Herramienta 5", Ventas: 15 },
    ];

    return (
        <Container>
            <h3>Productos Más Vendidos</h3>
            <hr />
            <Row className='cardProducto justify-content-center'>
                {productos.map((producto, index) => (
                    <Producto
                        key={index}
                        Titulo={producto.Titulo}
                        Ventas={producto.Ventas}
                    />
                ))}
            </Row>

        </Container>
    );
};

export default CardProducto;
