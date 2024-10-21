import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import '../../scss/Estadistica/CardProducto.scss';

const cotizacionesDiarias = [
    { Dia: "1", TotalCotizaciones: 5, Ventas: 3 },
    { Dia: "2", TotalCotizaciones: 7, Ventas: 4 },
    { Dia: "3", TotalCotizaciones: 6, Ventas: 2 },
];

const cotizacionesMensuales = [
    { Mes: "Enero", TotalCotizaciones: 10, Ventas: 7 },
    { Mes: "Febrero", TotalCotizaciones: 15, Ventas: 10 },
    { Mes: "Marzo", TotalCotizaciones: 8, Ventas: 4 },
    { Mes: "Abril", TotalCotizaciones: 12, Ventas: 9 },
];

const cotizacionesAnuales = [
    { Año: "2023", TotalCotizaciones: 120, Ventas: 75 },
    { Año: "2022", TotalCotizaciones: 140, Ventas: 90 },
];

export const getDatosCotizaciones = (periodo) => {
    if (periodo === 'diario') {
        return cotizacionesDiarias;
    } else if (periodo === 'mensual') {
        return cotizacionesMensuales;
    } else if (periodo === 'anual') {
        return cotizacionesAnuales; 
    }
    return [];
};

const CotizacionesRealizadas = ({ periodo }) => {
    const [datosCotizaciones, setDatosCotizaciones] = useState([]);

    useEffect(() => {
        setDatosCotizaciones(getDatosCotizaciones(periodo));
    }, [periodo]); 

    return (
        <div>
            <Table striped>
                <thead>
                    <tr>
                        <th>{periodo === 'diario' ? 'Día' : periodo === 'mensual' ? 'Mes' : 'Año'}</th>
                        <th>Total de Cotizaciones</th>
                        <th>Total de Ventas</th>
                    </tr>
                </thead>
                <tbody>
                    {datosCotizaciones.map((cotizacion, index) => (
                        <tr key={index}>
                            <td>{periodo === 'diario' ? cotizacion.Dia : periodo === 'mensual' ? cotizacion.Mes : cotizacion.Año}</td>
                            <td>{cotizacion.TotalCotizaciones}</td>
                            <td>{cotizacion.Ventas}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default CotizacionesRealizadas;
