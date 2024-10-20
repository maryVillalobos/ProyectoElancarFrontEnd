
import React from 'react';
import { Container, AccordionItem, AccordionHeader, AccordionBody, ListGroupItem, Badge } from 'reactstrap'; // Importa Container de Reactstrap para estructurar el layout
import producto1 from '@img/producto1-img.jpg';


const AddedProducto = ({Id, Cant, nombre, descripcion}) => {

  return (
    <>

      <AccordionItem>
        <AccordionHeader targetId={Id}><ListGroupItem className="justify-content-between">
          {nombre}{' '}
          <Badge pill>
            {Cant}
          </Badge>
        </ListGroupItem>

        </AccordionHeader>
        <AccordionBody accordionId={Id}>
        <img src={producto1} alt="" className='compacted-img'/>
        {descripcion}


        </AccordionBody>
      </AccordionItem>


    </>
  );
};

export default AddedProducto;