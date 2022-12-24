/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import axios  from 'axios'
import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const URL = 'http://150.136.41.162:5000/api/clientes/'

const CompMostrarClientes = () => {

const [ clientes, setCliente ] = useState([]);
useEffect (() => {
    getClientes()

},[])

// creamos la funcion para mostrar los clientes

const getClientes = async () => {

    const res = await axios.get(URL);
    setCliente(res.data);
}
//funcion para eliminar los clientes

const eliminarClientes = async (id) => {      
    await axios.delete(`${URL}${id}`)
    getClientes();
}

return (
    <div className='cantainer'>
         <div className='row'>
             <div className='col'>
                <Link to = '/clientes/agregar' className = 'btn btn-primary mt-2 mb-2'> <i className="fa-solid fa-user-plus"></i></Link>
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
                    { clientes.map((cliente,index) => (
                       <tr key = { index }>
                           <td> {cliente.nombre}</td>
                           <td> {cliente.apellido}</td>
                           <td> {cliente.correo}</td>
                           <td> {cliente.telefono}</td>
                           <td> {cliente.ciudad}</td>
                           <td>
                               <Link to ={`/clientes/editar/${cliente._id}`} className = 'btn btn-info'> <i className="fa-sharp fa-solid fa-file-pen"></i></Link>
                               <button onClick={() => eliminarClientes(cliente._id)} className = 'btn btn-danger'> <i className="fa-solid fa-trash-can"></i></button>


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
export default CompMostrarClientes;