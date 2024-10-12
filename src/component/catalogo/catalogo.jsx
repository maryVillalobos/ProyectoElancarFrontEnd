import React from 'react';
import { Container } from 'reactstrap'; // Importa Container de Reactstrap para estructurar el layout
import NavBar from '../landingPage/components/navbar';
import Card from './components/card';
import Sidebar from './components/Sidebar/sidebar';


const Catalogo = () => {
  return (
    <>
      <NavBar/>
      <div className='col-4'><Sidebar/></div>
      
      <div className='col-4'>
        <p>"hola"</p>
      
      </div>
    </>
  );
};

export default Catalogo;