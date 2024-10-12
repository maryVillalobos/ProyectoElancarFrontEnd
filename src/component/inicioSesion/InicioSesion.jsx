import React from 'react';
import { Container } from 'reactstrap'; // Importa Container de Reactstrap para estructurar el layout
import { InputGroup } from 'reactstrap';
import { InputGroupText } from 'reactstrap';
import { Input } from 'reactstrap';
import {Button } from 'reactstrap';
import {NavLink } from 'reactstrap';
import NavBar from '../landingPage/components/navbar';

const InicioSesion = () => {
  return (
    <>
      <NavBar />
       {/* <div className="login-page" style={{ backgroundImage: `url('/path-to-your-image.jpg')`, backgroundSize: 'cover', height: '100vh' }}> */}
      <div>
        <Container className="login-container">
          <div className="login-box">
            <h1>INICIAR SESIÓN</h1>
            <InputGroup className="mb-3">
              <h2>CORREO ELECTRÓNICO</h2>
              <Input placeholder="CORREO ELECTRÓNICO" />
            </InputGroup>
            <InputGroup className="mb-3">
              <h2>CONTRASEÑA</h2>
              <Input type="password" placeholder="Ingrese aquí su contraseña" />
            </InputGroup>
            
            <InputGroup>
              <h2>CORREO ELECTRÓNICO</h2>
              <Input placeholder="Ingrese aquí su correo electrónico" />
              <InputGroupText>
                @gmail.com
              </InputGroupText>bhjbhjb
            </InputGroup>




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

