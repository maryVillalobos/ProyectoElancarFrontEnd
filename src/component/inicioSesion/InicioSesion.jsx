import React from 'react';
import { Container, InputGroup, Input, InputGroupText, Button, NavLink } from 'reactstrap';
import NavBar from '../landingPage/components/navbar';
import Footer from '../landingPage/components/footer';
import '../../assets/scss/inicioSesion.scss';  // Importación del SCSS

const InicioSesion = () => {
  return (
    <>
      <NavBar />
      
      <div className="background-container">
        <div className="login-container">
          <div className="login-box">
            <h1 className='titulo'>INICIO DE SESIÓN</h1>
            <br />
            
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

              <div className="forgot-password">
                <a href="/recuperarContraseña">HE OLVIDADO MI CONTRASEÑA</a>
              </div>
            </div>
            <br /><br />
            <Button className="boton-inicio" color="dark" >
              <NavLink href="/">Inicio</NavLink>
            </Button>
          </div>
        </div>
      </div>

      <Footer/>



      
    </>
  );
};

export default InicioSesion;
