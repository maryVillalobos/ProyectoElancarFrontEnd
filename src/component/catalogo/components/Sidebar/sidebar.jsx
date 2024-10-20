import React, { useState } from 'react';
import {
  Button,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Accordion,
  Row,
  Navbar
} from 'reactstrap';
import SidebarElement from './sidebarElement';
import '@styles/sidebar.scss';
import logo from '@img/logonavbar.png'


const Sidebar = () => {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);}}
  const [isOpen, setIsOpen] = useState(false);

  const toggle1 = () => setIsOpen(!isOpen);

  return (
    <>
      <Row className='sidebar'>
        <Button color="primary" onClick={toggle1} className='col-2'>
              Categorías
            </Button>
        <div className='col-8'>
              <h1>Catálogo Elancar</h1>
            </div>
          
          </Row>


          

        
        <Offcanvas isOpen={isOpen} toggle={toggle1} scrollable>
          <OffcanvasHeader toggle={toggle1}>
          <img
            src={logo}
            alt="Logo de Elancar"
            style={{ width: '50px', height: '65px', marginRight: '5px' }}
          /> Categorías Elancar
          
          </OffcanvasHeader>
          <OffcanvasBody>
              <Accordion flush open={open} toggle={toggle}>
              <SidebarElement id={1} Categoria={"Herramientas"} Subcategorias={["Subcategoría1","Subcategoría2", "Subcategoría3"]}/>
              <SidebarElement id={2} Categoria={"Pinturas"} Subcategorias={["Subcategoría1","Subcategoría2", "Subcategoría3"]}/>
              <SidebarElement id={3} Categoria={"Servicios"} Subcategorias={["Subcategoría1","Subcategoría2", "Subcategoría3"]}/>
              <SidebarElement id={4} Categoria={"Tapizados"} Subcategorias={["Subcategoría1","Subcategoría2", "Subcategoría3"]}/>

              </Accordion>
          </OffcanvasBody>
        </Offcanvas>
    </>
  );
};

export default Sidebar;
