import React from 'react'
import useCotizador from '../hooks/useCotizador'


const Error = () => {
  const {error} = useCotizador()
    return (
    <div className="text-center bg-red-800 text-white font-bold uppercase">
        <p>{error}</p>
    </div>
  )
}

export default Error