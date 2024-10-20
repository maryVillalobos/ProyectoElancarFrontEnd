import React from 'react';
import { Container, Row } from 'reactstrap'; // Importa Container de Reactstrap para estructurar el layout
import Producto from './ProductosElement';
import producto1 from '@img/producto1-img.jpg';
import producto2 from '@img/producto2-img.jpg';
import producto3 from '@img/producto3-img.jpg';

import '@styles/sidebar.scss';


const ProductosContainer = ({Titulo, Descripcion}) => {
    return (
        <>
            <Container>
                <Row>
                    <div className="col-12 productos-title">Productos</div>
                </Row>

                <Row>
                    <Producto  Titulo={"Herramienta"} Descripcion={"Herramienta"} imagen={producto1}/>
                    <Producto  Titulo={"Herramienta"} Descripcion={"Herramienta"} imagen={producto2}/>
                    <Producto  Titulo={"Herramienta"} Descripcion={"Herramienta"} imagen={producto3}/>
                    <Producto  Titulo={"Herramienta"} Descripcion={"Herramienta"} imagen={producto2}/>
                    <Producto  Titulo={"Herramienta"} Descripcion={"Herramienta"} imagen={producto3}/>
                    <Producto  Titulo={"Herramienta"} Descripcion={"Herramienta"} imagen={producto1}/>

                    <Producto  Titulo={"Herramienta"} Descripcion={"Herramienta"} imagen={producto3}/>
                    <Producto  Titulo={"Herramienta"} Descripcion={"Herramienta"} imagen={producto1}/>
                    <Producto  Titulo={"Herramienta"} Descripcion={"Herramienta"} imagen={producto2}/>

                </Row>

            </Container>
        </>
    );
};

export default ProductosContainer;