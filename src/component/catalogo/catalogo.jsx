import React from 'react';
import { Container } from 'reactstrap'; // Importa Container de Reactstrap para estructurar el layout
import NavBar from '../landingPage/components/navbar';
import Producto from './components/Productos/ProductosElement';
import Sidebar from './components/Sidebar/sidebar';


const Catalogo = () => {
  return (
    <>
      <NavBar/>
      <div className="row">
          <div className='col-4'><Sidebar/></div>
          
          <div className='col-3'>
            <Producto Titulo={"Taladro"} Descripcion={"Herramienta"}/>
    
          </div>
          <div className='col-3'>
            <Producto Titulo={"Taladro"} Descripcion={"Herramienta"}/>
    
          </div>
          <div className='col-3'>
            <Producto Titulo={"Taladro"} Descripcion={"Herramienta"}/>
    
          </div>

      </div>
      
    </>
  );
};

export default Catalogo;