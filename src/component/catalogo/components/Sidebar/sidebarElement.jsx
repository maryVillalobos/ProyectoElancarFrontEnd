import React, { useState } from 'react';
import {
  Container,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';



const SidebarElement = ({Categoria, Subcategorias}) => {
 
    
  
  return (
    <>
    <AccordionItem>
          <AccordionHeader targetId="1">{Categoria}</AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
    </>
  );
};

export default SidebarElement;