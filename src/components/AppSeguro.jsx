import Formulario from './Formulario'
import Spinner from './Spinner'
import Resultado from './Resultado'
import useCotizador from '../hooks/useCotizador'

export default function AppSeguro() {

  const {resultado, cargando} = useCotizador()

  return (
    <>
        <header className='my-10'>
            <h1 className='text-white text-center text-6xl font-serif'>Estimador de seguro de autos</h1>
        </header>

        <main className='bg-green-600 md:w-2/3 lg:w-2/4 mx-auto shadow-2xl rounded-md p-10'>
            <Formulario/>
            
            {cargando ? <Spinner/> : <Resultado/>}
        </main>
    </>
  )
}
