/* eslint-disable react-hooks/exhaustive-deps */
import axios  from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const URL = 'http://150.136.41.162:5000/api/proveedores/'

const CompEditarProveedores = () => {

    const [nombre,setNombre] = useState('');
    const [apellido,setApellido] = useState('');
    const [correo,setCorreo] = useState('');
    const [telefono,setTelefono] = useState('');
    const [ciudad,setCiudad] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    // funcion actualizar proveedores
    const ActualizarProveedores = async (g) => {
        g.preventDefault()
        await axios.put(`${URL}${id}`,
           {nombre:nombre,apellido:apellido,correo:correo,telefono:telefono,ciudad:ciudad})
    navigate('/');  

    }

    useEffect(() => {
        getProveedoresById()
    
    }, [])
    
const getProveedoresById = async () => {
    const res = await axios.get(`${URL}${id}`)
    setNombre(res.data.nombre)
    setApellido(res.data.apellido)
    setCorreo(res.data.correo)
    setTelefono(res.data.telefono)
    setCiudad(res.data.ciudad)

}

return(
    <div>
        <h3> Modulo Modificar Proveedores </h3>
        <form onSubmit={ActualizarProveedores}>

        <div className='mb -3'>
        <label className='for-Label'> Nombre </label>
        <input value={nombre} onChange={(g) =>setNombre(g.target.value)}
        type='text' className='form-control'/>
        </div>

        <div className='mb -3'>
        <label className='for-Label'> Apellido </label>
        <input value={apellido} onChange={(g) =>setApellido(g.target.value)}
        type='text' className='form-control'/>
        </div>

        <div className='mb -3'>
        <label className='for-Label'> Correo </label>
        <input value={correo} onChange={(g) =>setCorreo(g.target.value)}
        type='text' className='form-control'/>
        </div>

        <div className='mb -3'>
        <label className='for-Label'> Telefono </label>
        <input value={telefono} onChange={(g) =>setTelefono(g.target.value)}
        type='number' className='form-control'/>
        </div>

        <div className='mb -3'>
        <label className='for-Label'> Ciudad </label>
        <input value={ciudad} onChange={(g) =>setCiudad(g.target.value)}
        type='text' className='form-control'/>
        </div>
<button type='submit' className='btn btn-primary'>   </button>

        </form>
    </div>
)

}
export default CompEditarProveedores;