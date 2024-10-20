import React from 'react';
import { Container, Button, Col, Row } from 'reactstrap'; // Importa Container de Reactstrap para estructurar el layout
import '@styles/cotizaciones.scss';


const SearchBarProductos = ({ Id, Cant, nombre, descripcion }) => {

    return (

        <Container className="barra-busqueda" style={{ paddingTop: '20px', color: 'red' }}>

            <Row>
                <Col md="4" xs="12" className='titulo-busqueda'>
                    Búsqueda de productos
                </Col>
                <Col md="4" xs="12">

                <input className="searchInput" type="text" name="" placeholder="Buscar por código" />
                <Button outline className="busqueda" href="#"><i class="bi bi-search"></i></Button>
                </Col>

                <Col md="4" xs="12">

                <input className="searchInput" type="text" name="" placeholder="Buscar por nombre" />
                <Button outline className="busqueda" href="#"><i class="bi bi-search"></i></Button>
                </Col> 

            </Row>


        </Container>
    );
};

export default SearchBarProductos;