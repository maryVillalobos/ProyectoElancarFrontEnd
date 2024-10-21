import React, { useState, useRef, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2"; 
import { Chart as ChartJS } from 'chart.js/auto';
import CardProducto, { getDatosProductos } from './ProductosVentas';
import ClientesCotizaciones, { getDatosClientes } from './ClientesCotizaciones';
import CotizacionesRealizadas, { getDatosCotizaciones } from './CotizacionRealizada';

const Grafico = ({ type, periodo }) => {
    const chartRef = useRef(null);
    const [chartType, setChartType] = useState('bar'); 

    const productos = getDatosProductos(periodo);
    const clientes = getDatosClientes(periodo);
    const cotizaciones = getDatosCotizaciones(periodo);

    const getChartData = (tipo, items) => {
        const labels = items.map(item => {
            if (tipo === "productos") return item.Titulo;
            if (tipo === "clientes") return item.Nombre;
            if (tipo === "cotizaciones") return item.Mes || item.Año || item.Dia;
        });

        const dataValues = items.map(item => {
            if (tipo === "productos") return item.Ventas;
            if (tipo === "clientes") return item.Cotizaciones;
            if (tipo === "cotizaciones") return item.TotalCotizaciones;
        });

        return {
            labels,
            datasets: [{
                label: tipo === "productos" ? "Productos Más Vendidos en el Mes" :
                       tipo === "clientes" ? "Clientes que Más Realizaron Cotizaciones" :
                       "Cotizaciones Realizadas",
                data: dataValues,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                ],
                borderWidth: 1.5,
            }],
        };
    };

    const data = {
        productos: getChartData("productos", productos),
        clientes: getChartData("clientes", clientes),
        cotizaciones: getChartData("cotizaciones", cotizaciones),
    };

    const options = {
        plugins: {
            legend: {
                display: false, 
            },
            tooltip: {
                enabled: true, 
            },
        },
    };

    useEffect(() => {
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    return (
        <div>
            <h3>{`Gráfico de ${type.charAt(0).toUpperCase() + type.slice(1)}`}</h3>
            <hr />
            <select value={chartType} onChange={(e) => setChartType(e.target.value)}>
                <option value="bar">Gráfico de Barras</option>
                <option value="line">Gráfico de Líneas</option>
            </select>
            {chartType === 'bar' && <Bar ref={chartRef} data={data[type]} options={options} />}
            {chartType === 'line' && <Line ref={chartRef} data={data[type]} options={options} />}
        </div>
    );
};

export default Grafico;
