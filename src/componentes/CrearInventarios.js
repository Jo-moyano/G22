import axios  from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URL = 'http://150.136.41.162:5000/api/inventarios/'

const CompAgregarInventarios = () => {

    const [detalle,setDetalle] = useState('');
    const [unidaddemedida,setUnidaddemedida] = useState('');
    const [cantidad,setCantidad] = useState('');
    const [costounitario,setCostounitario] = useState('');
    const [estado,setEstado] = useState('');
    const [total,setTotal] = useState('');
    const navigate = useNavigate();

// funcion guardar
const GuardarInventarios = async(g) => {
    g.preventDefault()
    await axios.post(URL,{detalle:detalle,unidaddemedida:unidaddemedida,cantidad:cantidad,costounitario:costounitario,estado:estado,total:total})
    navigate('/');

}

return(
    <div>
        <h3> Modulo agregar inventarios </h3>
        <form onSubmit={GuardarInventarios}>

        <div className='mb -3'>
        <label className='for-Label'> Detalle </label>
        <input value={detalle} onChange={(g) =>setDetalle(g.target.value)}
        type='text' className='form-control'/>
        </div>

        <div className='mb -3'>
        <label className='for-Label'> Unidaddemedida </label>
        <input value={unidaddemedida} onChange={(g) =>setUnidaddemedida(g.target.value)}
        type='text' className='form-control'/>
        </div>

        <div className='mb -3'>
        <label className='for-Label'> Cantidad </label>
        <input value={cantidad} onChange={(g) =>setCantidad(g.target.value)}
        type='number' className='form-control'/>
        </div>

        <div className='mb -3'>
        <label className='for-Label'> Costounitario </label>
        <input value={costounitario} onChange={(g) =>setCostounitario(g.target.value)}
        type='number' className='form-control'/>
        </div>

        <div className='mb -3'>
        <label className='for-Label'> Estado </label>
        <input value={estado} onChange={(g) =>setEstado(g.target.value)}
        type='text' className='form-control'/>
        </div>

        <div className='mb -3'>
        <label className='for-Label'> Total </label>
        <input value={total} onChange={(g) =>setTotal(g.target.value)}
        type='number' className='form-control'/>
        </div>
<button type='submit' className='btn btn-primary'> <i class="fa-solid fa-floppy-disk"></i> </button>

        </form>
    </div>
)


}

export default CompAgregarInventarios;