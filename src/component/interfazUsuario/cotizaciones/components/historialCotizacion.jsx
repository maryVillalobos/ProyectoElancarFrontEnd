import React from 'react';
import { Container, Table, Badge } from 'reactstrap'; // Importa Container de Reactstrap para estructurar el layout


const HistorialCotizacion = () => {

  return (
    <>

      <Container className="text-center" style={{ paddingTop: '20px', color: 'red' }}>
        <div>
          <Table striped>
            <thead>
              <tr>
                <th>N° Cotización</th>
                <th>Cliente</th>
                <th>Fecha emisión</th>
                <th>Estado</th>
                <th colSpan={2}>Opciones</th>
              </tr>
            </thead>
            <tbody>

              <tr >
                <td>1024</td>
                <td>Empresa B</td>
                <td>21/10/2024</td>
                <td><Badge color='bueno'>
                  Vendido <i class="bi bi-check"></i>
                </Badge>
                </td>
                <td ><i class="bi bi-eye"></i></td>
                <td> <i class="bi bi-download"></i></td>
              </tr>
              <tr >
                <td>1023</td>
                <td>Empresa A</td>
                <td>21/10/2024</td>
                <td><Badge color='bueno'>
                  Vendido <i class="bi bi-check"></i>
                </Badge>
                </td>
                <td ><i class="bi bi-eye"></i></td>
                <td> <i class="bi bi-download"></i></td>
              </tr>
              <tr >
                <td>1022</td>
                <td>Empresa A</td>
                <td>20/10/2024</td>
                <td>
                  <Badge color="danger">
                    En espera <i class="bi bi-hourglass-split"></i>
                  </Badge></td>
                <td ><i class="bi bi-eye"></i></td>
                <td> <i class="bi bi-download"></i></td>
              </tr>
              <tr >
                <td>1021</td>
                <td>Empresa C</td>
                <td>15/10/2024</td>
                <td><Badge color='bueno'>
                  Vendido <i class="bi bi-check"></i>
                </Badge>
                </td>
                <td ><i class="bi bi-eye"></i></td>
                <td> <i class="bi bi-download"></i></td>
              </tr>
              <tr >
                <td>1020</td>
                <td>Empresa B</td>
                <td>13/10/2024</td>
                <td>
                  <Badge color="cancelada">
                    Cancelada <i class="bi bi-x-circle-fill"></i>
                  </Badge></td>
                <td ><i class="bi bi-eye"></i></td>
                <td> <i class="bi bi-download"></i></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>

    </>
  );
};

export default HistorialCotizacion;