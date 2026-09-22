import type { ObjetoArchivo } from '../../../types/objeto'
import { Imagen } from '../../ui/Imagen'

interface Props {
  objeto: ObjetoArchivo
}

/* Una hoja de papel pautado con cinta rosa arriba. Si hay escaneo se enseña
   encima; la transcripción va siempre, porque es lo que se puede leer. */
export function Hoja({ objeto }: Props) {
  const parrafos = (objeto.texto ?? '').split(/\n{2,}/).filter(Boolean)

  return (
    <div className="mx-auto w-full max-w-xl space-y-8">
      {objeto.medios.imagen && (
        <Imagen src={objeto.medios.imagen} alt={`Escaneo de ${objeto.titulo}`} className="w-full shadow-lg" />
      )}

      <article className="relative -rotate-[0.6deg] bg-[#fbfaf7] px-8 pt-12 pb-10 shadow-[0_20px_36px_-16px_rgb(0_0_0/0.4)] sm:px-12">
        <span className="absolute -top-3 left-1/2 h-7 w-28 -translate-x-1/2 rotate-2 bg-rosa/70" aria-hidden />
        <div className="bg-[repeating-linear-gradient(transparent_0_1.75rem,rgb(194_37_92/0.18)_1.75rem_calc(1.75rem+1px))] font-mono text-sm leading-[1.75rem]">
          {parrafos.length > 0 ? (
            parrafos.map((p, i) => (
              <p key={i} className="mb-[1.75rem] whitespace-pre-line">
                {p}
              </p>
            ))
          ) : (
            <p className="text-tinta-suave">Transcripción pendiente.</p>
          )}
        </div>
      </article>
    </div>
  )
}
