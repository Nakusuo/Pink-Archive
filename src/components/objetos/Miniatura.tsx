import type { ObjetoArchivo } from '../../types/objeto'
import { Imagen } from '../ui/Imagen'

interface Props {
  objeto: ObjetoArchivo
  className?: string
}

/* La imagen de la tarjeta del índice. Una carta sin imagen se enseña como
   un trozo de papel con su primera línea: queda mejor que la caja rayada. */
export function Miniatura({ objeto, className = '' }: Props) {
  const { medios, tipo, texto, titulo } = objeto

  if (!medios.imagen && tipo === 'carta' && texto) {
    return (
      <div className={`flex items-start bg-papel-claro p-5 shadow-inner ${className}`}>
        <p className="line-clamp-5 font-mono text-xs leading-relaxed text-tinta-suave">
          {texto}
        </p>
      </div>
    )
  }

  return <Imagen src={medios.imagen} alt={titulo} className={className} />
}
