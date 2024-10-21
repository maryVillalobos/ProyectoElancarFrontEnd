import React from 'react';

const PeriodoSeleccion = ({ periodo, setPeriodo }) => {
    return (
        <div className="periodo-selector">
        <h4>Seleccionar el Periodo:</h4>
        <select value={periodo} onChange={(e) => setPeriodo(e.target.value)}>
            <option value="diario">Diario</option>
            <option value="mensual">Mensual</option>
            <option value="anual">Anual</option>
        </select>
        </div>
    );
};

export default PeriodoSeleccion;
