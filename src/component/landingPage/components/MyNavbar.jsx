import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse, Button } from 'reactstrap';
import { Link } from 'react-router-dom';  // Importar Link de react-router-dom
import '@styles/style.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '@img/logonavbar.png';

const MyNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="custom-navbar fixed-top" expand="md">
      <NavbarBrand href="/">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={logo}
            alt="Logo de Elancar"
            style={{ width: '65px', height: '80px', marginRight: '10px' }}
          />
          <h3>Elancar</h3>
        </div>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="navbar-nav" navbar>
          <NavItem>
            <NavLink tag={Link} to="/" className="font-weight-bold">Inicio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/catalogo" className="font-weight-bold">Catálogo</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/empresa/Información" className="font-weight-bold">Empresa</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/empresa/Preguntas" className="font-weight-bold">Preguntas Frecuentes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/empresa/Tiendas" className="font-weight-bold">Tiendas</NavLink>
          </NavItem>
        </Nav>
        <Button
          outline
          className={`person-icon ${isOpen ? 'menu-open' : ''}`}
          href="/InicioSesion"
        >
          {isOpen ? 'Inicio Sesión' : <i className="bi bi-person-circle"></i>}
        </Button>
      </Collapse>
    </Navbar>
  );
};

export default MyNavbar;
