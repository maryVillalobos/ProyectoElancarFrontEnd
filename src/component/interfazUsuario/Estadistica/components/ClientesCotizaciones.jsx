import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import '../../scss/Estadistica/CardProducto.scss';

const clientesDiarios = [
    { Dia: "1", Nombre: "Cliente 1", Cotizaciones: 5, TotalVenta: 43000 },
    { Dia: "2", Nombre: "Cliente 2", Cotizaciones: 8, TotalVenta: 77000 },
    { Dia: "3", Nombre: "Cliente 3", Cotizaciones: 12, TotalVenta: 110000 },
];

const clientesMensuales = [
    { Mes: "Enero", Nombre: "Cliente 1", Cotizaciones: 15, TotalVenta: 45000 },
    { Mes: "Febrero", Nombre: "Cliente 2", Cotizaciones: 20, TotalVenta: 50000 },
    { Mes: "Marzo", Nombre: "Cliente 3", Cotizaciones: 10, TotalVenta: 30000 },
];

const clientesAnuales = [
    { Año: "2023", Nombre: "Cliente 1", Cotizaciones: 120, TotalVenta: 300000 },
    { Año: "2022", Nombre: "Cliente 2", Cotizaciones: 140, TotalVenta: 350000 },
];

export const getDatosClientes = (periodo) => {
    if (periodo === 'diario') {
        return clientesDiarios;
    } else if (periodo === 'mensual') {
        return clientesMensuales;
    } else if (periodo === 'anual') {
        return clientesAnuales; 
    }
    return [];
};

const ClientesCotizaciones = ({ periodo }) => {
    const [datosClientes, setDatosClientes] = useState([]);

    useEffect(() => {
        setDatosClientes(getDatosClientes(periodo));
    }, [periodo]); 

    return (
        <div>
            <Table striped>
                <thead>
                    <tr>
                        <th>{periodo === 'diario' ? 'Día' : periodo === 'mensual' ? 'Mes' : 'Año'}</th>
                        <th>Nombre</th>
                        <th>Cotizaciones</th>
                        <th>Total Venta</th>
                    </tr>
                </thead>
                <tbody>
                    {datosClientes.map((cliente, index) => (
                        <tr key={index}>
                            <td>{periodo === 'diario' ? cliente.Dia : periodo === 'mensual' ? cliente.Mes : cliente.Año}</td>
                            <td>{cliente.Nombre}</td>
                            <td>{cliente.Cotizaciones}</td>
                            <td>${cliente.TotalVenta.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ClientesCotizaciones;
