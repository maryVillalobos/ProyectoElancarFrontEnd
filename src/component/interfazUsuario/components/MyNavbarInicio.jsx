import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import '@styles/style.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '@img/logonavbar.png';

const MyNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

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
                        <NavLink tag={Link} to="/ModificarPagina" className="font-weight-bold">Modificar Página</NavLink>
                    </NavItem>
                </Nav>
                {/* Dropdown para opciones de usuario */}
                <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} className="ml-auto">
                    <DropdownToggle caret color="secondary" className="person-icon-usuario">
                        <i className="bi bi-person-circle"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem header>Eladio V.</DropdownItem>
                        <DropdownItem disabled>Manual de Usuario</DropdownItem>
                        <DropdownItem disabled>Manual de Pagos</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href="/">Cerrar Sesión</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </Collapse>
        </Navbar>
    );
};

export default MyNavbar;
