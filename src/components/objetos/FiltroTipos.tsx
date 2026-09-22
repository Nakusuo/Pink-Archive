import { TIPOS } from '../../config/archivo'
import { numeroCatalogo } from '../../lib/formato'
import type { TipoObjeto } from '../../types/objeto'

interface Props {
  activo: TipoObjeto | null
  cuenta: Record<TipoObjeto, number>
  total: number
  onCambiar: (tipo: TipoObjeto | null) => void
}

/** Pestañas de tipo con su recuento. Los tipos vacíos no se enseñan. */
export function FiltroTipos({ activo, cuenta, total, onCambiar }: Props) {
  const opciones: [TipoObjeto | null, string, number][] = [
    [null, 'Todo', total],
    ...(Object.keys(TIPOS) as TipoObjeto[])
      .filter((t) => cuenta[t] > 0)
      .map((t): [TipoObjeto, string, number] => [t, TIPOS[t].plural, cuenta[t]]),
  ]

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por tipo">
      {opciones.map(([tipo, nombre, n]) => {
        const seleccionado = activo === tipo
        return (
          <button
            key={nombre}
            type="button"
            aria-pressed={seleccionado}
            onClick={() => onCambiar(tipo)}
            className={`rotulo flex items-baseline gap-2 border-[1.5px] border-tinta px-3 py-1.5 transition-colors ${
              seleccionado ? 'bg-tinta text-papel' : 'hover:bg-rosa-palido'
            }`}
          >
            {nombre}
            <span className={`font-mono ${seleccionado ? 'text-rosa' : 'text-rosa-tinta'}`}>
              {numeroCatalogo(n, 2)}
            </span>
          </button>
        )
      })}
    </div>
  )
}
