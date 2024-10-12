import React from 'react';
import {
  Container,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';


const SidebarElement = () => {
  return (
    <>
    <AccordionBody accordionId="1">
      <strong>
        This is the first item's accordion body.
      </strong>
      You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
      <code>
        .accordion-body
      </code>
      , though the transition does limit overflow.
    </AccordionBody>
    </>
  );
};

export default SidebarElement;