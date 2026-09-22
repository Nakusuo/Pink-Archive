import { Link } from 'react-router-dom'
import { MedioPendiente } from '../components/ui/MedioPendiente'
import { Regla } from '../components/ui/Regla'
import { useTituloDocumento } from '../hooks/useTituloDocumento'

export function NoEncontradoPage() {
  useTituloDocumento('Objeto no encontrado')

  return (
    <section className="py-12">
      <p className="text-sm font-bold tracking-wide uppercase">Objeto</p>
      <p className="titular text-8xl text-rosa-tinta">???</p>
      <Regla className="my-6" />
      <h1 className="titular text-5xl sm:text-7xl">No está en el archivo</h1>
      <p className="mt-2 font-semibold tracking-wide uppercase">
        Puede que aún no se haya catalogado
      </p>
      <MedioPendiente texto="Sin registro" className="my-10 h-48" />
      <Link to="/" className="rotulo border-[1.5px] border-tinta px-4 py-2 hover:bg-tinta hover:text-papel">
        ← Volver al índice
      </Link>
    </section>
  )
}
