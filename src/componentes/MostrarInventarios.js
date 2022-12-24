/* eslint-disable no-undef */
import axios  from 'axios'
import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const URL = 'http://150.136.41.162:5000/api/inventarios/'

const CompMostrarInventarios = () => {

const [ inventarios, setInventario ] = useState([]);
useEffect (() => {
    getInventarios()

},[])

// creamos la funcion para mostrar los invenarios

const getInventarios = async () => {

    const res = await axios.get(URL);
    setInventario(res.data);
}
//funcion para eliminar los inventarios

const eliminarInventarios = async (id) => {      
    await axios.delete(`${URL}${id}`)
    getInventarios();
}

return (
    <div className='cantainer'>
         <div className='row'>
             <div className='col'>
                <Link to = '/inventarios/agregar' className = 'btn btn-primary mt-2 mb-2'> <i className="fa-solid fa-user-plus"></i></Link>
                  <table className='table'>
                   <thead className='tableThedBg'>
                     <tr>
                        <th>Detalle</th>
                        <th>Unidaddemedida</th>
                        <th>Cantidad</th>
                        <th>Costounitario</th>
                        <th>Estado</th>
                        <th>Total</th>
                        <th>Acciones</th>
                        
                      </tr>
                    </thead>
                      <tbody>
                    { inventarios.map((inventario,index) => (
                       <tr key = { index }>
                           <td> {inventario.detalle}</td>
                           <td> {inventario.unidaddemedida}</td>
                           <td> {inventario.cantidad}</td>
                           <td> {inventario.costounitario}</td>
                           <td> {inventario.estado}</td>
                           <td> {inventario.total}</td>
                           <td>
                               <Link to ={`/inventarios/editar/${inventario._id}`} className = 'btn btn-info'> <i className="fa-sharp fa-solid fa-file-pen"></i></Link>
                               <button onClick={() => eliminarInventarios(inventario._id)} className = 'btn btn-danger'> <i className="fa-solid fa-trash-can"></i></button>


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
export default CompMostrarInventarios;