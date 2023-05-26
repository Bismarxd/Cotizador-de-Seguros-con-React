import { useCallback, useMemo, useRef } from "react"
import useCotizador from "../hooks/useCotizador"
import { MARCAS, PLANES } from "../constants"

const Resultado = () => {

    const {resultado, datos} = useCotizador()
    const {marca, plan, year} = datos
    const yearRef = useRef(year)

    //Callback evita el reerender
    //useMemo y useCallbackhace lo mismo

    const [nombreMarca] = useMemo( () =>
        MARCAS.filter(m => m.id === Number(marca)), 
        [resultado]
    ) 


    const [nombrePlan] = useMemo( () =>
        PLANES.filter(p => p.id === Number(plan)), 
        [resultado]
    ) 

    if (resultado === 0) {
        return null;
    }

  return (
    <div className=" bg-gray-700 text-center mt-5 p-5 shadow ">
        <h2 className="text-gray-100 font-black text-7xl ">
            Resumen
        </h2>

        <p className="text-slate-200 my-6 text-3xl">
            <span className=" font-bold text-3xl">MARCA: </span>
            {nombreMarca.nombre}
        </p>

        <p className="text-slate-200 my-6 text-3xl">
            <span className=" font-bold">PLAN: </span>
            {nombrePlan.nombre}
        </p>

        <p className="text-slate-200 my-6 text-3xl">
            <span className=" font-bold">AÑO DEL AUTO: </span>
            {yearRef.current}
        </p>

        <p className="text-slate-200 my-6 text-4xl">
            <span className=" font-bold">Total de la Cotización: </span>
            {resultado}
        </p>
      
    </div>
  )
}

export default Resultado
