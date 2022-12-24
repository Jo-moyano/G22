/* eslint-disable react-hooks/exhaustive-deps */
import axios  from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const URL = 'http://150.136.41.162:5000/api/inventarios/'

const CompEditarInventarios = () => {

    const [detalle,setDetalle] = useState('');
    const [unidaddemedida,setUnidaddemedida] = useState('');
    const [cantidad,setCantidad] = useState('');
    const [costounitario,setCostounitario] = useState('');
    const [estado,setEstado] = useState('');
    const [total,setTotal] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    // funcion actualizar inventarios
    const ActualizarInventarios = async (g) => {
        g.preventDefault()
        await axios.put(`${URL}${id}`,
           {detalle:detalle,unidaddemedida:unidaddemedida,cantidad:cantidad,costounitario:costounitario,estado:estado,total:total})
    navigate('/');  

    }

    useEffect(() => {
        getInventariosById()
    
    }, [])
    
const getInventariosById = async () => {
    const res = await axios.get(`${URL}${id}`)
    setDetalle(res.data.detalle)
    setUnidaddemedida(res.data.unidaddemedida)
    setCantidad(res.data.cantidad)
    setCostounitario(res.data.costounitario)
    setEstado(res.data.estado)
    setTotal(res.data.total)

}

return(
    <div>
        <h3> Modulo Modificar Inventarios </h3>
        <form onSubmit={ActualizarInventarios}>

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
        <label className='for-Label'> Cantidad</label>
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
<button type='submit' className='btn btn-primary'>   </button>

        </form>
    </div>
)

}
export default CompEditarInventarios;