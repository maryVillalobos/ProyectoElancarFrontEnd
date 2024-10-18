import React, { useState } from 'react';
import { Container, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink,ListGroup, ListGroupItem } from 'reactstrap';
import classnames from 'classnames';
import '@styles/empresa.scss'; // Asumiendo que tienes un archivo SCSS para el estilo

const Servicios = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    
      <Row className="servicios-modulo">
        {/* Pestañas de navegación */}
        <Col xs="12">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => { toggle('1'); }}
              >
                Ferretería
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('2'); }}
              >
                Servicios de Construcción
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '3' })}
                onClick={() => { toggle('3'); }}
              >
                Tienda de Materiales de Construcción
              </NavLink>
            </NavItem>
          </Nav>
          {/* Contenido de las pestañas */}
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <h4>Encargado de Ferretería</h4>
                <ListGroup flush>
                <ListGroupItem>
                    Nombre: Demetrio Arce
                </ListGroupItem>
                <ListGroupItem>
                    Correo: DemetrioA@correo.cl
                </ListGroupItem>
                <ListGroupItem>
                    Telefono Ferreteria: 9 1234 5678
                </ListGroupItem>
                <ListGroupItem>
                    Dirección: Diego de Almagro 2589, Calama, Antofagasta
                </ListGroupItem>
                <ListGroupItem>
                    Horario: Lunes a Viernes: 09:30 a 13:30 y 14:30 a 18:30 hrs
                </ListGroupItem>
                </ListGroup>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
            <Row>
                <Col sm="12">
                  <h4>Encargado de Ferretería</h4>
                <ListGroup flush>
                <ListGroupItem>
                    Nombre: Demetrio Arce
                </ListGroupItem>
                <ListGroupItem>
                    Correo: DemetrioA@correo.cl
                </ListGroupItem>
                <ListGroupItem>
                    Telefono Ferreteria: 9 1234 5678
                </ListGroupItem>
                <ListGroupItem>
                    Dirección: Diego de Almagro 2589, Calama, Antofagasta
                </ListGroupItem>
                <ListGroupItem>
                    Horario: Lunes a Viernes: 09:30 a 13:30 y 14:30 a 18:30 hrs
                </ListGroupItem>
                </ListGroup>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3">
            <Row>
                <Col sm="12">
                  <h4>Encargado Tienda de Materiales de Construcción</h4>
                <ListGroup flush>
                <ListGroupItem>
                    Nombre: Demetrio Arce
                </ListGroupItem>
                <ListGroupItem>
                    Correo: DemetrioA@correo.cl
                </ListGroupItem>
                <ListGroupItem>
                    Telefono Ferreteria: 9 1234 5678
                </ListGroupItem>
                <ListGroupItem>
                    Dirección: Diego de Almagro 2589, Calama, Antofagasta
                </ListGroupItem>
                <ListGroupItem>
                    Horario: Lunes a Viernes: 09:30 a 13:30 y 14:30 a 18:30 hrs
                </ListGroupItem>
                </ListGroup>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    
  );
};

export default Servicios;
