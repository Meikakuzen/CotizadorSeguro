import {useCallback, useMemo, useRef} from 'react'
import useCotizador from '../hooks/useCotizador'
import {MARCAS, PLANES} from '../constants'


const Resultado = () => {
  const {resultado, datos}= useCotizador()
  const {marca, plan, year} = datos

  const [nombreMarca] = useCallback(MARCAS.filter(m => m.id === Number(marca) ), [resultado]) //destructuring para extraer el nombre para poderlo mostrar
  const [nombrePlan] = useCallback(PLANES.filter(p=> p.id === Number(plan)), [resultado])                    //useCallback para evitar el rerender, solo cambiará cuando cambie resultado

  const yearRef= useRef(year) //no se porqué no funciona
    //con use ref el objeto se mantendrá persistente durante la vida completa del componente. Es mutable
    //"congela el valor"

  if (resultado === 0) return null
  
  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
        <h2 className="text-gray-500 font-black text-3xl">Resultado </h2>
        <p>
            <span className="my-2">Marca:{" "}</span>
            {nombreMarca.nombre}
        </p>
        <p>
            <span className="my-2">Año:{" "}</span>
            {yearRef.current}{year}            
        </p>
        <p>
            <span className="my-2">Plan:{" "}</span>
            {nombrePlan.nombre}
        </p>
        <p>
            <span className="my-2">Total Cotización:{" "}</span>
            {resultado}
        </p>
    </div>
  )
}

export default Resultado