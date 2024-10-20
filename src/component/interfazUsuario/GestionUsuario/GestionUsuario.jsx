import React, { useState } from 'react';
import { Container, Table, Button } from 'reactstrap';
import MyNavbar from '../components/MyNavbarInicio';
import AgregarUsuario from '../GestionUsuario/components/AgregarUsuario'; 
import ModificarUsuario from './components/ModificarUsuario';
import '../scss/GestionUsuario/GestionUsuario.scss';
const GestionUsuario = () => {
    const [usuarios, setUsuarios] = useState([
        { id: 1, nombre: 'Juan', apellido: 'Pérez', email: 'juan.perez@example.com', password: 'Contraseña123' },
        { id: 2, nombre: 'Ana', apellido: 'García', email: 'ana.garcia@example.com', password: 'Contraseña456' },
        { id: 3, nombre: 'Luis', apellido: 'Martínez', email: 'luis.martinez@example.com', password: 'Contraseña789' },
        { id: 4, nombre: 'María', apellido: 'López', email: 'maria.lopez@example.com', password: 'Contraseña101' },
        { id: 5, nombre: 'Carlos', apellido: 'Sánchez', email: 'carlos.sanchez@example.com', password: 'Contraseña202' },
    ]);

    const [modalAgregar, setModalAgregar] = useState(false);
    const [modalModificar, setModalModificar] = useState(false);
    const [usuarioModificar, setUsuarioModificar] = useState(null);

    const toggleAgregar = () => setModalAgregar(!modalAgregar);
    const toggleModificar = () => setModalModificar(!modalModificar);

    const agregarUsuario = (nuevoUsuario) => {
        const id = usuarios.length + 1; 
        setUsuarios([...usuarios, { id, ...nuevoUsuario }]);
    };

    const modificarUsuario = (usuarioActualizado) => {
        setUsuarios(usuarios.map(usuario => usuario.id === usuarioModificar.id ? { ...usuario, ...usuarioActualizado } : usuario));
    };

    return (
        <>
            <MyNavbar />
            <Container className="text-center" >
                <h1>Gestión de Usuarios</h1>
                <hr />
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
                                <td className="contraseña">{usuario.password}</td>
                                <td>
                                    <Button color="primary" size="sm" onClick={() => {
                                        setUsuarioModificar(usuario);
                                        toggleModificar();
                                    }}>
                                        Actualizar
                                    </Button>
                                </td>
                                <td>
                                    <Button color="danger" size="sm">Eliminar</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Button color="primary" onClick={toggleAgregar}>
                    Agregar Usuario
                </Button>
                <AgregarUsuario isOpen={modalAgregar} toggle={toggleAgregar} agregarUsuario={agregarUsuario} className={'content-center'} />
                <ModificarUsuario 
                    isOpen={modalModificar} 
                    toggle={toggleModificar} 
                    modificarUsuario={modificarUsuario} 
                    usuario={usuarioModificar} 
                />
            </Container>
        </>
    );
};

export default GestionUsuario;
