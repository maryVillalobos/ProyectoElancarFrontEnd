// src/components/MyNavbar.jsx
import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';

const MyNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false); // Estado para controlar la apertura del menú en móviles

  const toggle = () => setIsOpen(!isOpen); // Alternar entre abierto y cerrado

  return (
    <Navbar color="primary" dark expand="md" className="mb-4">
      <NavbarBrand href="/">Mi Aplicación</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/">Inicio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">Empresa</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/catalogo">Catálogo</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Preguntas Frecuentes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Tiendas</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/InicioSesion">Inicio Sesion</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default MyNavbar;
