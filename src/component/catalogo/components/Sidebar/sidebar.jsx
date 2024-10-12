import React, { useState }from 'react';
import {
  Container,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import SidebarElement from './sidebarElement';

const Sidebar = () => {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);}}
  return (
    <>
    <Accordion open={open} toggle={toggle}>
      <SidebarElement Categoria={"Herramientas"}
      Subcategorias={"Hogar"}/>


    
    </Accordion>



    
    </>
  );
};

export default Sidebar;