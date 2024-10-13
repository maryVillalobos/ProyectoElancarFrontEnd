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
      <SidebarElement id= {1}Categoria={"Herramientas"}
      Subcategorias={["Subcategoría1","Subcategoría2", "Subcategoría3"]}/>
      <SidebarElement id={2} Categoria={"Cerámicas"}
      Subcategorias={["Subcategoría1","Subcategoría2", "Subcategoría3"]}/>
      <SidebarElement id={3} Categoria={"Cerámicas"}
      Subcategorias={["Subcategoría1","Subcategoría2", "Subcategoría3"]}/>
      <SidebarElement id={4} Categoria={"Cerámicas"}
      Subcategorias={["Subcategoría1","Subcategoría2", "Subcategoría3"]}/>


    
    </Accordion>



    
    </>
  );
};

export default Sidebar;