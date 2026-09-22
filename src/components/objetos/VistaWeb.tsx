import type { ObjetoArchivo } from '../../types/objeto'
import { Imagen } from '../ui/Imagen'

interface Props {
  objeto: ObjetoArchivo
}

/** Captura de la web dentro de una ventana de navegador, con su enlace. */
export function VistaWeb({ objeto }: Props) {
  const { url, imagen } = objeto.medios
  const dominio = url ? url.replace(/^https?:\/\//, '').replace(/\/$/, '') : 'sin publicar'

  return (
    <figure className="mx-auto w-full max-w-sm">
      <div className="overflow-hidden rounded-md border-[1.5px] border-tinta bg-papel-claro">
        <div className="flex items-center gap-2 border-b-[1.5px] border-tinta px-3 py-2">
          <span className="flex gap-1" aria-hidden>
            <i className="h-2 w-2 rounded-full bg-rosa" />
            <i className="h-2 w-2 rounded-full border border-tinta" />
            <i className="h-2 w-2 rounded-full border border-tinta" />
          </span>
          <span className="truncate font-mono text-[0.6875rem] text-tinta-suave">{dominio}</span>
        </div>
        <Imagen src={imagen} alt={`Captura de ${objeto.titulo}`} className="aspect-[9/16] max-h-[28rem] w-full object-top" />
      </div>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="rotulo mt-4 flex items-center justify-center gap-2 border-[1.5px] border-tinta bg-tinta px-4 py-3 text-papel transition-colors hover:bg-rosa-tinta hover:border-rosa-tinta"
        >
          Abrir la web <span aria-hidden>↗</span>
        </a>
      )}
      <figcaption className="rotulo mt-2 text-center text-tinta-suave">Vista previa</figcaption>
    </figure>
  )
}
