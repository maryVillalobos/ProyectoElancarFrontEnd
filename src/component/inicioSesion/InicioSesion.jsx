import React from 'react';
import { Container, InputGroup, Input, InputGroupText, Button, NavLink } from 'reactstrap';
import NavBar from '../landingPage/components/navbar';

import '/src/assets/scss/inicioSesion.scss'; 
const InicioSesion = () => {
  return (
    <>
      <NavBar />
      <div>
        <Container className="login-container">
          <div className="login-box">
            <h1>INICIO DE SESIÓN</h1>

            <br/>
            <div className="input-group-container">
              <h2>CORREO ELECTRÓNICO</h2>
              <InputGroup className="mb-3">
                <Input placeholder="Ingrese aquí su correo electrónico" />
                <InputGroupText>@gmail.com</InputGroupText>
              </InputGroup>
            </div>

          
            <div className="input-group-container">
              <h2>CONTRASEÑA</h2>
              <InputGroup className="mb-3">
                <Input type="password" placeholder="Ingrese aquí su contraseña" />
              </InputGroup>
            </div>

            
            <div className="forgot-password">
              <a href="/reset-password">HE OLVIDADO MI CONTRASEÑA</a>
            </div>

            
            <Button color="primary" block>
              <NavLink href="/">Inicio</NavLink>
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default InicioSesion;
