import React from 'react';
import { Container, Row } from 'reactstrap'; // Importa Container de Reactstrap para estructurar el layout
import Producto from './ProductosElement';
import '@styles/sidebar.scss';


const ProductosContainer = ({Titulo, Descripcion}) => {
    return (
        <>
            <Container className='col-6'>
                <Row>
                    <div className="col-12 titulo-catalogo">Categoría</div>
                </Row>

                <Row>
                    <Producto Titulo={"Taladro"} Descripcion={"Herramienta"}/>
                    <Producto Titulo={"Taladro"} Descripcion={"Herramienta"}/>
                    <Producto Titulo={"Taladro"} Descripcion={"Herramienta"}/>
                    <Producto Titulo={"Taladro"} Descripcion={"Herramienta"}/>
                    <Producto Titulo={"Taladro"} Descripcion={"Herramienta"}/>
                    <Producto Titulo={"Taladro"} Descripcion={"Herramienta"}/>
                    <Producto Titulo={"Taladro"} Descripcion={"Herramienta"}/>
                    <Producto Titulo={"Taladro"} Descripcion={"Herramienta"}/>
                    <Producto Titulo={"Taladro"} Descripcion={"Herramienta"}/>
                    <Producto Titulo={"Taladro"} Descripcion={"Herramienta"}/>
                </Row>

            </Container>
        </>
    );
};

export default ProductosContainer;