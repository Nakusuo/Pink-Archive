import { useRef, useState } from 'react'
import { rutaPublica } from '../../../lib/formato'
import type { ObjetoArchivo } from '../../../types/objeto'
import { MedioPendiente } from '../../ui/MedioPendiente'

interface Props {
  objeto: ObjetoArchivo
}

/* Lámina enmarcada con paspartú. Al pulsarla se abre a tamaño completo en un
   <dialog> nativo: gestiona el foco, Escape y el fondo sin librerías. */
export function Lamina({ objeto }: Props) {
  const dialogo = useRef<HTMLDialogElement>(null)
  const [fallo, setFallo] = useState(false)
  const imagenes = [objeto.medios.imagen, ...(objeto.medios.galeria ?? [])].filter(
    (s): s is string => Boolean(s),
  )
  const [actual, setActual] = useState(0)
  const src = imagenes[actual]

  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="border-[10px] border-tinta bg-[#fbfaf7] p-[8%] shadow-[0_24px_40px_-18px_rgb(0_0_0/0.45)]">
        {src && !fallo ? (
          <button
            type="button"
            onClick={() => dialogo.current?.showModal()}
            className="block w-full cursor-zoom-in shadow-[inset_0_0_0_1px_rgb(0_0_0/0.08)]"
            aria-label={`Ampliar ${objeto.titulo}`}
          >
            <img
              src={rutaPublica(src)}
              alt={objeto.titulo}
              onError={() => setFallo(true)}
              className="block w-full"
            />
          </button>
        ) : (
          <MedioPendiente className="aspect-square w-full" />
        )}
      </div>

      {imagenes.length > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {imagenes.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => {
                setActual(i)
                setFallo(false)
              }}
              aria-label={`Ver imagen ${i + 1}`}
              aria-current={i === actual}
              className={`h-2.5 w-2.5 border border-tinta ${i === actual ? 'bg-rosa' : 'bg-transparent'}`}
            />
          ))}
        </div>
      )}

      {src && (
        <dialog
          ref={dialogo}
          onClick={(e) => e.target === dialogo.current && dialogo.current.close()}
          className="m-auto max-h-[95vh] max-w-[95vw] bg-transparent p-0 backdrop:bg-tinta/85"
        >
          <img src={rutaPublica(src)} alt={objeto.titulo} className="max-h-[90vh] w-auto" />
          <form method="dialog" className="mt-2 text-center">
            <button className="rotulo bg-papel px-3 py-1.5">Cerrar</button>
          </form>
        </dialog>
      )}
    </div>
  )
}
