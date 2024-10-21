import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import '../../scss/Estadistica/CardProducto.scss';

const productosDiarios = [
    { Dia: "1", Codigo: 1, Titulo: "Herramienta 1", Ventas: 10 },
    { Dia: "2", Codigo: 2, Titulo: "Herramienta 2", Ventas: 15 },
    { Dia: "3", Codigo: 3, Titulo: "Herramienta 3", Ventas: 7 },
];

const productosMensuales = [
    { Mes: "Enero", Codigo: 1, Titulo: "Herramienta 1", Ventas: 50 },
    { Mes: "Febrero", Codigo: 2, Titulo: "Herramienta 2", Ventas: 30 },
    { Mes: "Marzo", Codigo: 3, Titulo: "Herramienta 3", Ventas: 20 },
];

const productosAnuales = [
    { Año: "2023", Codigo: 1, Titulo: "Herramienta 1", Ventas: 500 },
    { Año: "2022", Codigo: 2, Titulo: "Herramienta 2", Ventas: 300 },
];

export const getDatosProductos = (periodo) => {
    if (periodo === 'diario') {
        return productosDiarios;
    } else if (periodo === 'mensual') {
        return productosMensuales;
    } else if (periodo === 'anual') {
        return productosAnuales; 
    }
    return [];
};

const ProductoVenta = ({ periodo }) => {
    const [datosProductos, setDatosProductos] = useState([]);

    useEffect(() => {
        setDatosProductos(getDatosProductos(periodo));
    }, [periodo]); 

    return (
        <div>
            <Table striped>
                <thead>
                    <tr>
                        <th>{periodo === 'diario' ? 'Día' : periodo === 'mensual' ? 'Mes' : 'Año'}</th>
                        <th>Código</th>
                        <th>Nombre del Producto</th>
                        <th>Ventas</th>
                    </tr>
                </thead>
                <tbody>
                    {datosProductos.map((producto) => (
                        <tr key={producto.Codigo}>
                            <td>{periodo === 'diario' ? producto.Dia : periodo === 'mensual' ? producto.Mes : producto.Año}</td>
                            <td>{producto.Codigo}</td>
                            <td>{producto.Titulo}</td>
                            <td>{producto.Ventas}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ProductoVenta;
