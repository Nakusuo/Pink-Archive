import type { ObjetoArchivo } from '../../../types/objeto'
import { Escalar } from '../../ui/Escalar'
import { EtiquetaObjeto } from '../EtiquetaObjeto'

interface Props {
  objeto: ObjetoArchivo
}

/* Disquete de 3.5" en CSS: carcasa con la esquina superior derecha cortada,
   persiana metálica, flecha, marca HD, los dos agujeros de protección y la
   etiqueta de catálogo abajo. Proporción real: 90 × 94 mm. */
export function Disquete({ objeto }: Props) {
  return (
    <div
      className="relative mx-auto aspect-[94/90] w-full max-w-[34rem] bg-carcasa shadow-[0_24px_40px_-18px_rgb(0_0_0/0.55)] [clip-path:polygon(0_0,94%_0,100%_6%,100%_100%,0_100%)]"
      role="img"
      aria-label={`Disquete con la etiqueta ${objeto.codigo}: ${objeto.titulo}`}
    >
      {/* Relieve interior: el borde que marca el molde del plástico */}
      <div className="absolute inset-[2.5%] rounded-sm border border-carcasa-borde" aria-hidden />

      {/* Persiana metálica con su ventana */}
      <div
        className="absolute top-0 left-[23%] h-[33%] w-[49%] rounded-b-sm bg-gradient-to-b from-[#dcdcd9] via-metal to-[#a9a9a5] shadow-[inset_0_-2px_0_rgb(0_0_0/0.15)]"
        aria-hidden
      >
        <div className="absolute top-[14%] left-[56%] h-[72%] w-[24%] rounded-[2px] bg-carcasa" />
      </div>

      {/* Flecha de inserción y marca HD */}
      <span className="absolute top-[7%] left-[4.5%] text-xl leading-none text-[#555]" aria-hidden>
        ▲
      </span>
      <span
        className="absolute top-[12%] right-[5%] font-display text-2xl font-black text-[#3a3a3d] italic [text-shadow:0_1px_0_#111]"
        aria-hidden
      >
        HD
      </span>

      {/* Agujeros de protección contra escritura */}
      <span className="absolute bottom-[5%] left-[3%] h-[3.5%] w-[3.5%] bg-[#0d0d0e]" aria-hidden />
      <span className="absolute right-[3%] bottom-[5%] h-[3.5%] w-[3.5%] bg-[#0d0d0e]" aria-hidden />

      {/* Etiqueta */}
      <div className="absolute right-[9%] bottom-0 left-[9%] h-[62%] overflow-hidden rounded-t-[3px] shadow-[0_-1px_0_rgb(255_255_255/0.08)]">
        <Escalar anchoBase={400} className="h-full bg-papel-claro">
          <EtiquetaObjeto objeto={objeto} />
        </Escalar>
      </div>
    </div>
  )
}
