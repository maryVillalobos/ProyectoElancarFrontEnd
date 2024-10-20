import React, { useState, useRef, useEffect } from "react";
import { Bar, Line, Pie } from "react-chartjs-2"; 
import { Chart as ChartJS } from 'chart.js/auto';

const Grafico = () => {
    const chartRef = useRef(null);
    const [chartType, setChartType] = useState('bar'); 

    const data = {
        labels: ["Herramienta 1", "Herramienta 2", "Herramienta 3", "Herramienta 4", "Herramienta 5"],
        datasets: [
        {
            label: "Productos Más Vendidos en el Mes",
            data: [10, 24, 54, 51, 15],
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
        },
        ],
    };

    const options = {
        responsive: true,
        legend: {
        display: true,
        },
    };

    const handleChartTypeChange = (event) => {
        setChartType(event.target.value);
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
        <h3>Estadísticas</h3>
        <hr />
        <h4>Ingrese el tipo de grafico</h4>
        <select value={chartType} onChange={handleChartTypeChange}>
            <option value="bar">Gráfico de Barras</option>
            <option value="line">Gráfico de Líneas</option>
            <option value="pie">Gráfico Circular</option>
        </select>

        {chartType === 'bar' && <Bar ref={chartRef} data={data} options={options} />}
        {chartType === 'line' && <Line ref={chartRef} data={data} options={options} />}
        {chartType === 'pie' && <Pie ref={chartRef} data={data} options={options} />}
    </div>
  );
};

export default Grafico;
