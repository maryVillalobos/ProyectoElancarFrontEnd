import React from 'react';
import { InputGroup, Input, InputGroupText, Button, NavLink } from 'reactstrap';
import MyNavbar from '../landingPage/components/MyNavbar';
import Footer from '../landingPage/components/footer';
import '@styles/inicioSesion.scss';  // Importación del SCSS

const InicioSesion = () => {
  return (
    <>
      <MyNavbar />
      
      <div className="content-container">
        <div className="background-container">
          <div className="overlay">
            <div className="login-box">
              <h2>Iniciar Sesión</h2>
              <InputGroup className="mb-3">
                <InputGroupText><i class="bi bi-at"></i></InputGroupText>
                <Input type="email" placeholder="Correo Electrónico" />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupText><i class="bi bi-lock"></i></InputGroupText>
                <Input type="password" placeholder="Contraseña" />
              </InputGroup>
              <NavLink href="#" className="forgot-password-link">He olvidado mi contraseña</NavLink>
              <Button color="primary" href="/interfazUsuario" className="button-formulario w-100 mt-3">Ingresar</Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default InicioSesion;

