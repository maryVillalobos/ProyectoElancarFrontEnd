import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const AgregarUsuario = ({ isOpen, toggle, agregarUsuario }) => {
    const [nuevoUsuario, setNuevoUsuario] = useState({ nombre: '', apellido: '', email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNuevoUsuario({ ...nuevoUsuario, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        agregarUsuario(nuevoUsuario);
        setNuevoUsuario({ nombre: '', apellido: '', email: '', password: '' }); 
        toggle(); 
    };

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Agregar Usuario</ModalHeader>
        <ModalBody>
            <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="nombre">Nombre</Label>
                <Input
                type="text"
                name="nombre"
                id="nombre"
                value={nuevoUsuario.nombre}
                onChange={handleChange}
                required
                />
            </FormGroup>
            <FormGroup>
                <Label for="apellido">Apellido</Label>
                <Input
                type="text"
                name="apellido"
                id="apellido"
                value={nuevoUsuario.apellido}
                onChange={handleChange}
                required
                />
            </FormGroup>
            <FormGroup>
                <Label for="email">Correo Electrónico</Label>
                <Input
                type="email"
                name="email"
                id="email"
                value={nuevoUsuario.email}
                onChange={handleChange}
                required
                />
            </FormGroup>
            <FormGroup>
                <Label for="password">Contraseña</Label>
                <Input
                type="password"
                name="password"
                id="password"
                value={nuevoUsuario.password}
                onChange={handleChange}
                required
                />
            </FormGroup>
            
            </Form>
        </ModalBody>
        <ModalFooter>
            <Button color="primary" type="submit">Agregar</Button>
            <Button color="dark" onClick={toggle}>Cancelar</Button>
        </ModalFooter>
        </Modal>
    );
};

export default AgregarUsuario;
