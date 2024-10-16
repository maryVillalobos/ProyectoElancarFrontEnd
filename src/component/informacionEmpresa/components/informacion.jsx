import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '@styles/empresa.scss'; // Asumiendo que tienes un archivo SCSS para el estilo

const Informacion = () => {
  return (
    <Container className="informacion-modulo">
      {/* Sección 1 */}
      <Row className="section-row my-4">
        <Col xs="12" md="6" className="text-center">
          <h2>La unión Ferretera Elancar</h2>
          <p>Con más de 35 años de experiencia en la venta de materiales de construcción, Elancar Ltda. se ha posicionado como un referente en Calama. Fundada en 1987, hemos crecido y expandido nuestras operaciones hacia zonas más alejadas, brindando soluciones eficientes y confiables tanto a clientes particulares como a empresas, con un firme compromiso con la calidad y el servicio.</p>
        </Col>
        <Col xs="12" md="6" className="text-center">
          <img src="https://resizer.iproimg.com/unsafe/filters:format(webp):quality(70)/https://assets.iproup.com/assets/jpg/2022/11/31707.jpg" alt="Imagen Sección 1" className="img-fluid" />
        </Col>
      </Row>
      <hr />
      
      {/* Sección 2 */}
      <Row className="section-row my-4">
        <Col xs="12" md="6" className="text-center">
          <img src="https://pinturasdoal.com/wp-content/uploads//Featured-Inversion-para-montar-una-ferreteria.jpg" alt="Imagen Sección 2" className="img-fluid" />
        </Col>
        <Col xs="12" md="6" className="text-center">
          <h2>Misión</h2>
          <p>“Proveer de soluciones en el ámbito del mercado constructivo, a través de la venta de materiales para construcción, artículos de ferretería y servicios relacionados, que permitan satisfacer en forma eficiente, segura y oportuna las necesidades de nuestros clientes, principalmente concentrados en la provincia el Loa. Capital Calama.” </p>
        </Col>
      </Row>
      <hr />
      
      {/* Sección 3 */}
      <Row className="section-row my-4">
        <Col xs="12" md="6" className="text-center">
          <h2>Visión</h2>
          <p>“Convertirse en un referente de la atención a público del mercado ferretero, brindando un servicio de atención y orientación al cliente de primera línea mediante un sistema de trabajo organizado y eficiente que sea capaz de darle un valor agregado importante a nuestro servicio de venta a vista del cliente.” </p>
        </Col>
        <Col xs="12" md="6" className="text-center">
          <img src="https://honduras.argos.co/wp-content/uploads/2023/11/Conoce-los-tipos-de-albanileria-ArgosHonduras-img-noticia.jpg" alt="Imagen Sección 3" className="img-fluid" />
        </Col>
      </Row>
      <hr />
      
      {/* Sección 4 */}
      <Row className="section-row my-4">
        <Col xs="12" md="6" className="text-center">
          <img src="https://cl.habcdn.com/photos/project/big/terminacion-interior-vivienda-52m2-109514.jpg" alt="Imagen Sección 4" className="img-fluid" />
        </Col>
        <Col xs="12" md="6" className="text-center">
          <h2>Filosofía</h2>
          <p>En Ferretería Elancar creemos firmemente en el valor de una atención personalizada y orientada a las necesidades del cliente. Nuestra filosofía se basa en la dedicación a brindar soluciones prácticas y eficientes para el mercado constructivo, siempre con integridad y transparencia. Valoramos el trabajo organizado y colaborativo, y nos esforzamos por generar un impacto positivo a través de la calidad de nuestros productos, el fortalecimiento de relaciones a largo plazo con nuestros clientes y la implementación de procesos que añadan valor en cada interacción.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Informacion;
