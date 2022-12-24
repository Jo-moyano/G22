/* eslint-disable react-hooks/exhaustive-deps */
import axios  from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const URL = 'http://150.136.41.162:5000/api/materiales/'

const CompEditarMateriales = () => {

    const [detalle,setDetalle] = useState('');
    const [unidaddemedida,setUnidaddemedida] = useState('');
    const [categoria,setCategoria] = useState('');
    const [costounitario,setCostounitario] = useState('');
    const [estado,setEstado] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    // funcion actualizar materiales
    const ActualizarMateriales = async (g) => {
        g.preventDefault()
        await axios.put(`${URL}${id}`,
           {detalle:detalle,unidaddemedida:unidaddemedida,categoria:categoria,costounitario:costounitario,estado:estado})
    navigate('/');  

    }

    useEffect(() => {
        getMaterialesById()
    
    }, [])
    
const getMaterialesById = async () => {
    const res = await axios.get(`${URL}${id}`)
    setDetalle(res.data.detalle)
    setUnidaddemedida(res.data.unidaddemedida)
    setCategoria(res.data.categoria)
    setCostounitario(res.data.costounitario)
    setEstado(res.data.estado)

}

return(
    <div>
        <h3> Modulo Modificar Materiales </h3>
        <form onSubmit={ActualizarMateriales}>

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
        <label className='for-Label'> Categoria </label>
        <input value={categoria} onChange={(g) =>setCategoria(g.target.value)}
        type='text' className='form-control'/>
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
<button type='submit' className='btn btn-primary'>   </button>

        </form>
    </div>
)

}
export default CompEditarMateriales;