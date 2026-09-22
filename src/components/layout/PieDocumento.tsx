import { CodigoBarras } from '../ui/CodigoBarras'

interface Props {
  documento: string
}

/** El pie del cartel: número de documento, código de barras y el cuadro rosa. */
export function PieDocumento({ documento }: Props) {
  return (
    <div className="flex items-end justify-between gap-4 border-t border-tinta pt-3">
      <div>
        <p className="rotulo text-rosa-tinta">Documento n.º</p>
        <p className="mt-1 font-semibold tracking-wide">{documento}</p>
      </div>
      <div className="flex items-end gap-4">
        <CodigoBarras valor={documento} />
        <span className="block h-8 w-8 bg-rosa" aria-hidden />
      </div>
    </div>
  )
}
