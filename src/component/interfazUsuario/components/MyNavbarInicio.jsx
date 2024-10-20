import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse, Button } from 'reactstrap';
import { Link } from 'react-router-dom';  
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
                <NavLink tag={Link} to="/interfazUsuario" className="font-weight-bold">Cotización</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to="/estadística" className="font-weight-bold">Estadísticas</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to="/GestiónDeUsuario" className="font-weight-bold">Gestión de Usuario</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to="/ModificarPágina" className="font-weight-bold">Modificar Página</NavLink>
            </NavItem>
            </Nav>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h6 style={{ marginRight: '10px', color: '#000' }}>Eladio V.</h6>
                    <Button
                        outline
                        className={`person-icon ${isOpen ? 'menu-open' : ''}`}
                        href="/"
                    >
                        {isOpen ? 'Cerrar Sesión' : <i className="bi bi-box-arrow-right"></i>}
                    </Button>
                </div>
            

        </Collapse>
        </Navbar>
    );
};

export default MyNavbar;
