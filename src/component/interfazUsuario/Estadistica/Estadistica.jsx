import React, { useState } from 'react';
import { Container } from 'reactstrap'; 
import MyNavbar from '../components/MyNavbarInicio';
import Grafico from './components/Grafico';
import CardProducto from './components/ProductosVentas';
import ClientesCotizaciones from './components/ClientesCotizaciones';
import CotizacionesRealizadas from './components/CotizacionRealizada';
import PeriodoSeleccion from './components/periodoSeleccion';
import '../scss/Estadistica/Estadistica.scss';

const Estadistica = () => {
  const [periodoProductos, setPeriodoProductos] = useState('diario'); 
  const [periodoClientes, setPeriodoClientes] = useState('diario'); 
  const [periodoCotizaciones, setPeriodoCotizaciones] = useState('diario'); 

  return (
    <>
      <MyNavbar />
      <Container fluid className="empresa-fondo">
        <h1 className='titulo-empresa'>Estadísticas Generales</h1>
      </Container>
      {/* Gráfico y tabla de productos */}
      <Container className="estadistica-container"> 
        <div className="grafico-container"> 
          <Grafico type="productos" periodo={periodoProductos} />
        </div>
        <div className="tablas-container"> 
          <h3>Productos Más Vendidos</h3>
          <hr />
          <div className="productos-container"> 
            <PeriodoSeleccion periodo={periodoProductos} setPeriodo={setPeriodoProductos} />
            <CardProducto periodo={periodoProductos} />
          </div>
        </div>
      </Container>

      {/* Gráfico y tabla de clientes */}
      <Container className="estadistica-container"> 
        <div className="grafico-container"> 
          <Grafico type="clientes" periodo={periodoClientes} />
        </div>
        <div className="tablas-container"> 
          <h3>Clientes que Más Realizaron Cotizaciones</h3>
          <hr />
          <div className="clientes-container"> 
            <PeriodoSeleccion periodo={periodoClientes} setPeriodo={setPeriodoClientes} />
            <ClientesCotizaciones periodo={periodoClientes} />
          </div>
        </div>
      </Container>

      {/* Gráfico y tabla de cotizaciones */}
      <Container className="estadistica-container">
        <div className="grafico-container"> 
          <Grafico type="cotizaciones" periodo={periodoCotizaciones} />
        </div>
        <div className="tablas-container"> 
          <h3>Estadísticas de Cotizaciones</h3>
          <hr />
          <div className="cotizaciones-container"> 
            <PeriodoSeleccion periodo={periodoCotizaciones} setPeriodo={setPeriodoCotizaciones} />
            <CotizacionesRealizadas periodo={periodoCotizaciones} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Estadistica;
