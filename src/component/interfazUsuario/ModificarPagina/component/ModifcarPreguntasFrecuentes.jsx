import React, { useState } from 'react';
import { Container, Row, Col, Button, Table, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup, Label } from 'reactstrap';
import '@styles/ModificarPagina.scss';

const ModifcarPreguntasFrecuentes = () => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState('');

  const toggleEditModal = () => setEditModalOpen(!editModalOpen);
  const toggleAddModal = () => setAddModalOpen(!addModalOpen);

  const handleEdit = (question) => {
    setSelectedQuestion(question);
    toggleEditModal();
  };

  return (
    <>
      <Container className="ModificarLandigpage">
        <Row className="ModificarLandigpage-row my-4">
          <Col xs="12" className="text-left">
            <div className="titulo-con-boton">
              <h3 className="H2-Titulo-ModificarLandigpage">Edición de Preguntas Frecuentes</h3>
            </div>

            {/* Tabla de preguntas */}
            <Table bordered>
              <thead>
                <tr>
                  <th>Pregunta</th>
                  <th>Editar</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>¿Cuál es el horario de atención?</td>
                  <td><Button color="warning" onClick={() => handleEdit("¿Cuál es el horario de atención?")}>Editar</Button></td>
                  <td><Button color="danger">Eliminar</Button></td>
                </tr>
                <tr>
                  <td>¿Dónde están ubicados?</td>
                  <td><Button color="warning">Editar</Button></td>
                  <td><Button color="danger">Eliminar</Button></td>
                </tr>
              </tbody>
            </Table>

            {/* Botones de acción */}
            <div className="botones-accion">
              <Button outline className="boton-color">Guardar</Button>
              <Button outline className="boton-color" onClick={toggleAddModal}>Agregar Nueva Pregunta</Button>
            </div>
          </Col>
          <hr className="HR-ModificarLandigpage" />
        </Row>

        {/* Modal para editar pregunta */}
        <Modal isOpen={editModalOpen} toggle={toggleEditModal}>
          <ModalHeader toggle={toggleEditModal}>Editar Pregunta Frecuente: ¿Cuál es el horario de atención?</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="editQuestion">Respuesta</Label>
              <Input
                type="textarea"
                id="editQuestion"
                placeholder="Ingrese la respuesta para la nueva pregunta"
                value={selectedQuestion}
                onChange={(e) => setSelectedQuestion(e.target.value)}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggleEditModal}>Guardar</Button>
            <Button color="secondary" onClick={toggleEditModal}>Cancelar</Button>
          </ModalFooter>
        </Modal>

        {/* Modal para agregar nueva pregunta */}
        <Modal isOpen={addModalOpen} toggle={toggleAddModal}>
          <ModalHeader toggle={toggleAddModal}>Agregar Nueva Pregunta Frecuente</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="newQuestion">Pregunta</Label>
              <Input
                type="text"
                id="newQuestion"
                placeholder="Ingrese la nueva pregunta"
              />
            </FormGroup>
            <FormGroup>
              <Label for="newAnswer">Respuesta</Label>
              <Input
                type="textarea"
                id="newAnswer"
                placeholder="Ingrese la respuesta para la nueva pregunta"
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggleAddModal}>Guardar</Button>
            <Button color="secondary" onClick={toggleAddModal}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </Container>
    </>
  );
};

export default ModifcarPreguntasFrecuentes;
