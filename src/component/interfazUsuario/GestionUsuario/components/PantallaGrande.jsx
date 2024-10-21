import React from 'react';
import { Table, Button } from 'reactstrap';
import { FaEdit, FaTrash } from 'react-icons/fa'; 
const UsuariosPantallaGrande = ({ usuarios, setUsuarioModificar, toggleModificar }) => {
    return (
        <Table striped>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Correo Electrónico</th>
                    <th>Contraseña</th>
                    <th>Actualizar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map((usuario) => (
                    <tr key={usuario.id}>
                        <td>{usuario.id}</td>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.apellido}</td>
                        <td>{usuario.email}</td>
                        <td>{usuario.password}</td>
                        <td>
                            <Button color="primary" size="sm" onClick={() => {
                                setUsuarioModificar(usuario);
                                toggleModificar();
                            }}>
                                <FaEdit />  Actualizar
                            </Button>
                        </td>
                        <td>
                            <Button color="danger" size="sm">
                            <FaTrash />Eliminar
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default UsuariosPantallaGrande;
