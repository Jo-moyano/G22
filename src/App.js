import './App.css';

// importamos los componentes 
import CompMostrarProveedores from './componentes/MostrarProveedores';
import CompAgregarProveedores from './componentes/CrearProveedores';
import CompEditarProveedores from './componentes/EditarProveedores';

import CompMostrarClientes from './componentes/MostrarClientes';
import CompAgregarClientes from './componentes/CrearClientes';
import CompEditarClientes  from './componentes/EditarClientes';

import CompMostrarMateriales from './componentes/MostrarMateriales';
import CompAgregarMateriales from './componentes/CrearMateriales';
import CompEditarMateriales from './componentes/EditarMateriales';

import CompMostrarInventarios from './componentes/MostrarInventarios';
import CompAgregarInventarios from './componentes/CrearInventarios';
import CompEditarInventarios from './componentes/EditarInventarios';



// importar routers

import { BrowserRouter,Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="container">
        <nav className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
             <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
               <img src="https://misiontic2022.mintic.gov.co/mt2022/assets/assets/images/logo-mision.png" style={{ height: 32 }} alt='logo' />
               <span className="fs-4">Website</span>
             </a>
   
             <ul className="nav nav-pills">
               <li className="nav-item"><a href="/" className="nav-link active">Inicio</a></li>
               <li className="nav-item"><a href="/inventarios" className="nav-link">Inventarios</a></li>
               <li className="nav-item"><a href="/clientes" className="nav-link ">Clientes</a></li>
               <li className="nav-item"><a href="/proveedores" className="nav-link">Proveedores</a></li>
               <li className="nav-item"><a href="/materiales" className="nav-link">Materiales</a></li>
              </ul>
           </nav>

      </header>
       <BrowserRouter>
       <Routes>
         <Route path='/proveedores' element = { <CompMostrarProveedores/>} />
         <Route path='proveedores/agregar' element = { <CompAgregarProveedores/>} />
         <Route path='/proveedores/editar/:id' element = { <CompEditarProveedores/>} />

         <Route path='/clientes' element = { <CompMostrarClientes/>} />
         <Route path='/clientes/agregar' element = { <CompAgregarClientes/>} />
         <Route path='/clientes/editar/:id' element = { <CompEditarClientes/>} />

         <Route path='/materiales' element = { <CompMostrarMateriales/>} />
         <Route path='/materiales/agregar' element = { <CompAgregarMateriales/>} />
         <Route path='/materiales/editar/:id' element = { <CompEditarMateriales/>} />

         <Route path='/inventarios' element = { <CompMostrarInventarios/>} />
         <Route path='/inventarios/agregar' element = { <CompAgregarInventarios/>} />
         <Route path='/inventarios/editar/:id' element = { <CompEditarInventarios/>} />

       </Routes>
       </BrowserRouter>

    </div>
  );
}

export default App;
