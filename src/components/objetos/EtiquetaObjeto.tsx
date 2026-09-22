import { ARCHIVO, TIPOS } from '../../config/archivo'
import { numeroCatalogo, partirFecha } from '../../lib/formato'
import type { ObjetoArchivo } from '../../types/objeto'
import { Emblema } from '../ui/Emblema'

interface Props {
  objeto: ObjetoArchivo
  /** Versión apaisada y baja, para la tira de la cinta. */
  compacta?: boolean
}

function Mini({ etiqueta, valor }: { etiqueta: string; valor: string }) {
  return (
    <div>
      <p className="text-[0.5rem] font-bold tracking-wider text-rosa-tinta uppercase">{etiqueta}</p>
      <p className="text-[0.625rem] leading-tight">{valor}</p>
    </div>
  )
}

/** La pegatina de catálogo que va sobre el disquete o la cinta. */
export function EtiquetaObjeto({ objeto, compacta = false }: Props) {
  const { anio } = partirFecha(objeto.fecha)
  const tipo = TIPOS[objeto.tipo]

  const sello = (
    <div className="flex items-stretch gap-2">
      <div className="border border-tinta text-[0.5rem] leading-none font-semibold tracking-wider uppercase">
        <p className="px-1.5 py-1">{ARCHIVO.nombre}</p>
        <p className="border-t border-tinta px-1.5 py-1">Archivo objeto</p>
        <p className="border-t border-tinta px-1.5 py-1">
          Vol.{String(anio).slice(-2)} · Item.{numeroCatalogo(objeto.numero)}
        </p>
      </div>
      <span className="w-3 bg-rosa" aria-hidden />
    </div>
  )

  if (compacta) {
    return (
      <div className="flex items-center justify-between gap-4 bg-papel-claro px-4 py-2 text-tinta">
        <div className="min-w-0">
          <p className="text-[0.5rem] font-bold tracking-wider text-rosa-tinta uppercase">Catálogo n.º</p>
          <p className="titular text-3xl">{objeto.codigo}</p>
        </div>
        <div className="hidden min-w-0 flex-1 sm:block">
          <p className="truncate text-xs font-semibold uppercase">{objeto.titulo}</p>
          <p className="text-[0.625rem] uppercase">
            {tipo.soporte} · {objeto.medidas ?? anio}
          </p>
        </div>
        {sello}
      </div>
    )
  }

  return (
    <div className="bg-papel-claro p-4 text-tinta sm:p-5">
      <div className="flex items-start justify-between border-b border-tinta/60 pb-2">
        <div className="text-[0.625rem] leading-tight font-semibold uppercase">
          <p className="text-xs">{objeto.titulo}</p>
          <p>{tipo.soporte}</p>
          {objeto.medidas && <p>{objeto.medidas}</p>}
        </div>
        <Emblema className="h-6 w-6" />
      </div>

      <p className="mt-3 text-[0.625rem] font-bold tracking-wider text-rosa-tinta uppercase">
        Catálogo n.º
      </p>
      <p className="titular text-5xl sm:text-6xl">{objeto.codigo}</p>

      <div className="mt-2 grid grid-cols-3 gap-2 border-t border-tinta/60 pt-2">
        <Mini etiqueta="Objeto" valor={objeto.subtitulo} />
        <Mini etiqueta="Año" valor={String(anio)} />
        <Mini etiqueta="Estado" valor={objeto.estado} />
      </div>

      <div className="mt-2 flex items-end justify-between gap-2 border-t border-tinta/60 pt-2">
        <div className="grid grid-cols-2 gap-4">
          <Mini etiqueta="Colección" valor={ARCHIVO.coleccion} />
          <Mini etiqueta="Ocasión" valor={objeto.ocasion ?? 'Porque sí'} />
        </div>
        {sello}
      </div>
    </div>
  )
}
