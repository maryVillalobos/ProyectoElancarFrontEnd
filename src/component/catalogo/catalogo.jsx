import React from 'react';
import { Container } from 'reactstrap'; // Importa Container de Reactstrap para estructurar el layout
import Card from './components/card';
import Sidebar from './components/Sidebar/sidebar';
import MyNavbar from '../landingPage/components/MyNavbar';


const Catalogo = () => {
  return (
    <>
      <MyNavbar/>
      <div className='col-4'><Sidebar/></div>
      
      <div className='col-4'>
        <p>"hola"</p>
      
      </div>
    </>
  );
};

export default Catalogo;