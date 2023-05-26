import useCotizador from "../hooks/useCotizador"

const Error = () => {

    const {error} = useCotizador();

  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{error}</div>
  )
}

export default Error
