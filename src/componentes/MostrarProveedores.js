/* eslint-disable no-undef */
import axios  from 'axios'
import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const URL = 'http://150.136.41.162:5000/api/proveedores/'

const CompMostrarProveedores = () => {

const [ proveedores, setProveedor ] = useState([]);
useEffect (() => {
    getProveedores()

},[])

// creamos la funcion para mostrar los proveedores

const getProveedores = async () => {

    const res = await axios.get(URL);
    setProveedor(res.data);
}
//funcion para eliminar los proveedores

const eliminarProveedores = async (id) => {      
    await axios.delete(`${URL}${id}`)
    getProveedores();
}

return (
    <div className='cantainer'>
         <div className='row'>
             <div className='col'>
                <Link to = '/proveedores/agregar' className = 'btn btn-primary mt-2 mb-2'> <i className="fa-solid fa-user-plus"></i></Link>
                  <table className='table'>
                   <thead className='tableThedBg'>
                     <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo</th>
                        <th>Telefono</th>
                        <th>Ciudad</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                      <tbody>
                    { proveedores.map((proveedor,index) => (
                       <tr key = { index }>
                           <td> {proveedor.nombre}</td>
                           <td> {proveedor.apellido}</td>
                           <td> {proveedor.correo}</td>
                           <td> {proveedor.telefono}</td>
                           <td> {proveedor.ciudad}</td>
                           <td>
                               <Link to ={`/proveedores/editar/${proveedor._id}`} className = 'btn btn-info'> <i className="fa-sharp fa-solid fa-file-pen"></i></Link>
                               <button onClick={() => eliminarProveedores(proveedor._id)} className = 'btn btn-danger'> <i className="fa-solid fa-trash-can"></i></button>


                            </td>
                        </tr>
                    ))}
                      </tbody>
               </table>                           
            </div>  
        </div>             
    </div>
    )
}
export default CompMostrarProveedores;