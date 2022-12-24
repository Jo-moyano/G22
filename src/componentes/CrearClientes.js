import axios  from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URL = 'http://150.136.41.162:5000/api/clientes/'

const CompAgregarClientes = () => {

    const [nombre,setNombre] = useState('');
    const [apellido,setApellido] = useState('');
    const [correo,setCorreo] = useState('');
    const [telefono,setTelefono] = useState('');
    const [ciudad,setCiudad] = useState('');
    const navigate = useNavigate();

// funcion guardar
const GuardarClientes = async(g) => {
    g.preventDefault()
    await axios.post(URL,{nombre:nombre,apellido:apellido,correo:correo,telefono:telefono,ciudad:ciudad})
    navigate('/');

}

return(
    <div>
        <h3> Modulo agregar clientes </h3>
        <form onSubmit={GuardarClientes}>

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
<button type='submit' className='btn btn-primary'> <i class="fa-solid fa-floppy-disk"></i> </button>

        </form>
    </div>
)


}

export default CompAgregarClientes;
