import {MARCAS, YEARS, PLANES} from '../constants'
import {Fragment} from 'react'
import useCotizador from '../hooks/useCotizador'
import Error from './Error'

const Formulario = () => {
     
    const {handleChangeDatos, datos, error, setError, cotizarSeguro} = useCotizador()
    
    const handleSubmit = e =>{
        e.preventDefault()

        if(Object.values(datos).includes('')){
            setError("Todos los campos son obligatorios")
            return
        }
        setError('')
        cotizarSeguro()
    }
 
 
    return (

   <>
        {error && <Error />}
        <form onSubmit={handleSubmit}>
            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-500 uppercase">Marca</label>
                <select name="marca" className="w-full p-3 bg-white border border-gray-200"
                onChange={(e)=>handleChangeDatos(e)}
                value={datos.marca}>
                    <option value="">--Seleccione Marca</option>
                    {MARCAS.map(marca=>(
                        <option key={marca.id}
                        value={marca.id}>{marca.nombre}</option>
                    ))}
                </select>
            </div>
            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-500 uppercase">Año</label>
                <select name="year" className="w-full p-3 bg-white border border-gray-200"
                onChange={(e)=>handleChangeDatos(e)}
                value={datos.year}>
                    <option value="">--Seleccione Año</option>
                 {YEARS.map(year=>(
                    <option key={year} value={year}>{year}</option>
                 ))}
                </select>
            </div>
            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-500 uppercase">Elige un plan</label>
                    <div className="flex gap-3 items-center">
                        {PLANES.map(plan=>(
                            <Fragment key={plan.id}>
                                <label htmlFor="">{plan.nombre}</label>
                                <input type="radio"
                                name="plan"
                                value={plan.id} 
                                onChange={(e)=>handleChangeDatos(e)}/>
                            </Fragment>
                        ))}
                    </div>
            </div>
            <input type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-xl transition-colors cursor-pointer text-white font-bold uppercase rounded p-3"
            value="cotizar" />
        </form>
   
   </>
   )
}

export default Formulario