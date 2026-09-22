import { Link } from 'react-router-dom'
import { TIPOS } from '../../config/archivo'
import { fechaCorta, numeroCatalogo } from '../../lib/formato'
import type { ObjetoArchivo } from '../../types/objeto'
import { Miniatura } from './Miniatura'

interface Props {
  objeto: ObjetoArchivo
}

/** Una ficha pequeña del índice: número, miniatura, título y código. */
export function TarjetaObjeto({ objeto }: Props) {
  return (
    <Link
      to={`/objeto/${objeto.id}`}
      className="group flex flex-col border-[1.5px] border-tinta bg-papel-claro p-4 transition-[translate,box-shadow] duration-200 ease-archivo hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-tinta)] focus-visible:shadow-[4px_4px_0_var(--color-tinta)]"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="rotulo">Objeto</p>
          <p className="titular text-5xl text-rosa-tinta">{numeroCatalogo(objeto.numero)}</p>
        </div>
        <span className="rotulo border border-tinta px-1.5 py-0.5">
          {TIPOS[objeto.tipo].singular}
        </span>
      </div>

      <Miniatura
        objeto={objeto}
        className="mt-4 aspect-[4/3] w-full border border-tinta/20 grayscale-[15%] transition-[filter] duration-300 group-hover:grayscale-0"
      />

      <h3 className="titular mt-4 text-3xl">{objeto.titulo}</h3>
      <p className="rotulo mt-1 text-tinta-suave">{objeto.subtitulo}</p>

      <dl className="mt-4 grid grid-cols-2 border-t border-tinta pt-2">
        <div>
          <dt className="rotulo text-rosa-tinta">Fecha</dt>
          <dd className="font-mono text-xs">{fechaCorta(objeto.fecha)}</dd>
        </div>
        <div>
          <dt className="rotulo text-rosa-tinta">Código</dt>
          <dd className="font-mono text-xs">{objeto.codigo}</dd>
        </div>
      </dl>
    </Link>
  )
}
