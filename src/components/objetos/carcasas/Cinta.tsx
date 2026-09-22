import { useState } from 'react'
import { rutaPublica } from '../../../lib/formato'
import type { ObjetoArchivo } from '../../../types/objeto'
import { MedioPendiente } from '../../ui/MedioPendiente'
import { EtiquetaObjeto } from '../EtiquetaObjeto'

interface Props {
  objeto: ObjetoArchivo
}

/* Cinta VHS: la etiqueta arriba, como en el lomo, y el vídeo ocupando la
   ventana donde irían las bobinas. El reproductor es el nativo: es el único
   que se lleva bien con móviles y pantalla completa. */
export function Cinta({ objeto }: Props) {
  const [fallo, setFallo] = useState(false)
  const { video, imagen } = objeto.medios

  return (
    <div className="mx-auto w-full max-w-3xl rounded-md bg-carcasa p-3 shadow-[0_24px_40px_-18px_rgb(0_0_0/0.55)] sm:p-4">
      <div className="overflow-hidden rounded-[3px]">
        <EtiquetaObjeto objeto={objeto} compacta />
      </div>

      <div className="relative mt-3 rounded-[3px] border-2 border-carcasa-borde bg-black sm:mt-4">
        {/* Bobinas: se asoman a los lados del reproductor */}
        <span className="absolute top-1/2 -left-[1.1rem] hidden h-7 w-7 -translate-y-1/2 rounded-full border-4 border-carcasa-borde bg-[#0d0d0e] sm:block" aria-hidden />
        <span className="absolute top-1/2 -right-[1.1rem] hidden h-7 w-7 -translate-y-1/2 rounded-full border-4 border-carcasa-borde bg-[#0d0d0e] sm:block" aria-hidden />

        {video && !fallo ? (
          <video
            src={rutaPublica(video)}
            poster={imagen ? rutaPublica(imagen) : undefined}
            controls
            playsInline
            preload="metadata"
            onError={() => setFallo(true)}
            className="mx-auto block max-h-[70vh] w-full object-contain"
          >
            Tu navegador no puede reproducir este video.
          </video>
        ) : (
          <MedioPendiente className="aspect-video w-full bg-papel-claro" />
        )}
      </div>

      <div className="mt-3 flex justify-between px-1 font-mono text-[0.625rem] text-[#77777a] uppercase" aria-hidden>
        <span>SP · {objeto.medidas ?? '—'}</span>
        <span>{objeto.codigo}</span>
      </div>
    </div>
  )
}
