import { createContext, useState } from "react"
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from "../helpers"


const CotizadorContext = createContext()


const CotizadorProvider = ({children}) => {
  
    const [datos,setDatos] = useState({
        marca:'',
        year:'',
        plan:''
    })
    const [error, setError] = useState("")
    const [resultado, setResultado] = useState(0)
    
    const handleChangeDatos = e =>{
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const cotizarSeguro = () =>{
        //Una base
        let resultado = 2000
        //diferencia de años
        const diferencia = obtenerDiferenciaYear(datos.year)

        
        //hay que restar el 3% por cada año

        resultado -= ((diferencia * 3) * resultado ) /100
        //Americano 15%
        //Europeo 30%
        //Asiatico 5%
        resultado *= calcularMarca(datos.marca)

        //Básico 20%
        //Completo 50%

        resultado *=calcularPlan(datos.plan)

        resultado = resultado.toFixed(2)

        //formatear dinero
        resultado= formatearDinero(resultado)
        setResultado(resultado)
    }

    return (
    
    
        <CotizadorContext.Provider
            value={{
             handleChangeDatos,
             datos,
             setError,
             error, 
             cotizarSeguro,
             resultado

             }}>
                {children}
        </CotizadorContext.Provider>
    
  )
}

export{
    CotizadorProvider
}


export default CotizadorContext