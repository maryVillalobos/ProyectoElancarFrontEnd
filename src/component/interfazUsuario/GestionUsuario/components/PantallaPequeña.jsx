import React, { useState } from 'react';
import { Card, CardBody, CardTitle, Button, Collapse } from 'reactstrap';
import { FaEdit, FaTrash } from 'react-icons/fa'; 

const UsuariosPantallaPequena = ({ usuarios, setUsuarioModificar, toggleModificar }) => {
    const [collapse, setCollapse] = useState(null);

    const toggleCollapse = (id) => {
        setCollapse(collapse === id ? null : id);
    };

    return (
        <div className="usuarios-pantalla-pequena">
            {usuarios.map((usuario) => (
                <Card key={usuario.id} className="mb-3 usuario-card">
                    <CardBody>
                        <CardTitle className="d-flex justify-content-between align-items-center">
                            <div className="text-left">
                                <strong>Nombre:</strong> {usuario.nombre} <br />
                                <strong>Email:</strong> {usuario.email}
                            </div>
                            <Button
                                outline
                                className="person-icon"
                                onClick={() => toggleCollapse(usuario.id)}
                            >
                                {collapse === usuario.id ? 'Ver Menos' : 'Ver Más'}
                            </Button>
                        </CardTitle>
                        <Collapse isOpen={collapse === usuario.id}>
                            <div className="usuario-detalles text-left">
                                <strong>Apellido:</strong> {usuario.apellido}<br/>
                                <strong>Contraseña:</strong> {usuario.password}
                                <div className="usuario-acciones text-center">
                                    <Button color="primary" size="sm" style={{ margin: '10px' }} onClick={() => {
                                        setUsuarioModificar(usuario);
                                        toggleModificar();
                                    }}>
                                        <FaEdit /> Editar
                                    </Button>
                                    <Button color="danger" size="sm" className="ml-2" style={{ margin: '10px' }} >
                                        <FaTrash /> Eliminar
                                    </Button>
                                </div>
                            </div>
                        </Collapse>
                    </CardBody>
                </Card>
            ))}
        </div>
    );
};

export default UsuariosPantallaPequena;
