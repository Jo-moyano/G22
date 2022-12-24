/* eslint-disable no-undef */
import axios  from 'axios'
import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const URL = 'http://150.136.41.162:5000/api/materiales/'

const CompMostrarMateriales = () => {

const [ materiales, setMaterial ] = useState([]);
useEffect (() => {
    getMateriales()

},[])

// creamos la funcion para mostrar los materiales

const getMateriales = async () => {

    const res = await axios.get(URL);
    setMaterial(res.data);
}
//funcion para eliminar los materiales

const eliminarMateriales = async (id) => {      
    await axios.delete(`${URL}${id}`)
    getMateriales();
}

return (
    <div className='cantainer'>
         <div className='row'>
             <div className='col'>
                <Link to = '/materiales/agregar' className = 'btn btn-primary mt-2 mb-2'> <i className="fa-solid fa-user-plus"></i></Link>
                  <table className='table'>
                   <thead className='tableThedBg'>
                     <tr>
                        <th>Detalle</th>
                        <th>Unidaddemedida</th>
                        <th>Categoria</th>
                        <th>Costounitario</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                        
                      </tr>
                    </thead>
                      <tbody>
                    { materiales.map((material,index) => (
                       <tr key = { index }>
                           <td> {material.detalle}</td>
                           <td> {material.unidaddemedida}</td>
                           <td> {material.categoria}</td>
                           <td> {material.costounitario}</td>
                           <td> {material.estado}</td>
                           <td>
                               <Link to ={`/materiales/editar/${material._id}`} className = 'btn btn-info'> <i className="fa-sharp fa-solid fa-file-pen"></i></Link>
                               <button onClick={() => eliminarMateriales(material._id)} className = 'btn btn-danger'> <i className="fa-solid fa-trash-can"></i></button>


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
export default CompMostrarMateriales;