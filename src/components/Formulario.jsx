import { Fragment} from "react"
import { MARCAS, YEAR, PLANES } from "../constants"
import useCotizador from "../hooks/useCotizador"
import Error from "./Error"


export default function Formulario() {

  const {datos, handleChangeDatos, error, setError, cotizarSeguro} = useCotizador()


  //Validar Formulario
  const handleSubmit = e => {
    e.preventDefault()

    if (Object.values(datos).includes('')) {
      setError('Todos los campos son obligatorios')
      return
    }

    setError('')

    //TODO : cotizar
    cotizarSeguro();
  }



  return (
    <>
      {error && <Error/>}
      <form
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label className="block mb-4 text-blue-950 uppercase font-extrabold text-4xl font-mono">Marca</label>

          <select 
            name="marca"
            className="w-full p-3 bg-gray-600 border border-gray-950 text-gray-200"
            onChange={ e => handleChangeDatos(e)}
            value={datos.marca}
          >

          <option value="">--Selecciona Marca--</option>

          {MARCAS.map(marca => (
            <option
              key={marca.id}
              value={marca.id}
            >

              {marca.nombre}

            </option>
          ))}
          </select>
        </div>

        <div>
          <label className="block mb-4 text-blue-950 uppercase font-extrabold text-4xl font-mono">AÑO</label>

          <select 
            name="year"
            className="w-full p-3 bg-gray-600 border border-gray-950 text-gray-200"
            onChange={ e => handleChangeDatos(e)}
            value={datos.year}
          >

          <option >--Selecciona Año--</option>

          {YEAR.map(year => (
            <option
              key={year}
              value={year}
            >

              {year}

            </option>
          ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-4  uppercase font-extrabold text-4xl font-mono text-blue-950">ELIGE UN PLAN</label>
          <div className="flex gp-3 text-gray-100">
            {PLANES.map(plan => (
                  <Fragment key={plan.id}>
                    <label className="mr-3 ml-4 text-xl">
                      {plan.nombre}
                    </label>

                    <input 
                      type="radio" 
                      name="plan"
                      value={plan.id}
                      onChange={ e => handleChangeDatos(e)}

                    />
                  </Fragment>
              ))}
          </div>
          
        </div>

        <input 
          type="submit" 
          className="w-full bg-emerald-950 hover:bg-emerald-600 transition-colors text-white cursor-pointer p-3 font-bold"
          value="COTIZAR"
        />

      </form>
    </>
    
  )
}
