import React, { useState, useEffect } from 'react';
import { Container, Button } from 'reactstrap';
import MyNavbar from '../components/MyNavbarInicio';
import AgregarUsuario from '../GestionUsuario/components/AgregarUsuario'; 
import ModificarUsuario from './components/ModificarUsuario';
import UsuariosPantallaGrande from './components/PantallaGrande';
import UsuariosPantallaPequena from './components/PantallaPequeña';
import { FaPlus} from 'react-icons/fa';
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
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
            <Container fluid className="empresa-fondo">
            <h1 className='titulo-empresa'>Gestión de Usuario</h1>
            </Container>
            <Container >
                <br />
                <div className="text-center">
                    <Button color="primary" onClick={toggleAgregar}>
                        Agregar Usuario
                    </Button>
                </div>
                
                <AgregarUsuario 
                    isOpen={modalAgregar} 
                    toggle={toggleAgregar} 
                    agregarUsuario={agregarUsuario} 
                />
                <hr />
                {isSmallScreen ? (
                    <UsuariosPantallaPequena 
                        usuarios={usuarios} 
                        setUsuarioModificar={setUsuarioModificar} 
                        toggleModificar={toggleModificar} 
                    />
                ) : (
                    <UsuariosPantallaGrande 
                        usuarios={usuarios} 
                        setUsuarioModificar={setUsuarioModificar} 
                        toggleModificar={toggleModificar} 
                    />
                )}
                
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
