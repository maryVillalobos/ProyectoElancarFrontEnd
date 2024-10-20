import React, { useState } from 'react';
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';



const SidebarElement = ({id, Categoria, Subcategorias =[]}) => {
 
    
  
  return (
    <>
    
    <AccordionItem>
          <AccordionHeader targetId={id}>{Categoria}</AccordionHeader>
          
          <AccordionBody accordionId={id}>
            
          {Subcategorias.map((subcategoria, index) => (
            <div className='col-4' key={index}>
              {subcategoria}
            </div>
          ))}
            
          </AccordionBody>
        </AccordionItem>
    </>
  );
};

export default SidebarElement;