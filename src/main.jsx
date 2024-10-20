import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@styles/style.scss';

// Componentes Landing Page
import Landing from './component/landingPage/Landing';
import InicioSesion from './component/inicioSesion/InicioSesion';
import Catalogo from './component/catalogo/catalogo';
import Interfaz from './component/interfazUsuario/interfazUsuario';
import Empresa from './component/informacionEmpresa/Empresa';
// Componentes Interfaz de usuario Elancar
import Estadistica from './component/interfazUsuario/Estadistica/Estadistica'
import GestionUsuario from './component/interfazUsuario/GestionUsuario/GestionUsuario';
import ProductoDescripcion from './component/landingPage/components/ProductoDescripcion';
import ModificarPagina from './component/interfazUsuario/ModificarPagina/ModificarPagina';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/InicioSesion",
    element: <InicioSesion />
  },
  {
    path: "/catalogo",
    element: <Catalogo />
  },
  {
    path: "/interfazUsuario",
    element: <Interfaz />
  },
  {
    path: "/empresa/:module?",  // El parámetro 'module' es opcional
    element: <Empresa />
  },
  {
    path: "/estadística",
    element: <Estadistica />
  },
  {
    path: "/GestiónDeUsuario",
    element: <GestionUsuario />
  },
  {
    path: "/productoDescripcion",  
    element: <ProductoDescripcion />
  },
  {
    path: "/modificarPagina",  // Nueva ruta para la descripción del producto
    element: <ModificarPagina />
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
