import { useMemo } from 'react'
import { codificarCode39 } from '../../lib/codigoBarras'

interface Props {
  valor: string
  alto?: number
  className?: string
}

/** Código de barras Code 39 escaneable, dibujado en SVG a escala de módulo. */
export function CodigoBarras({ valor, alto = 32, className = '' }: Props) {
  const { barras, largo } = useMemo(() => codificarCode39(valor), [valor])

  return (
    <svg
      viewBox={`0 0 ${largo} ${alto}`}
      preserveAspectRatio="none"
      className={`h-8 w-36 fill-current ${className}`}
      role="img"
      aria-label={`Código de barras ${valor}`}
      shapeRendering="crispEdges"
    >
      {barras.map((b) => (
        <rect key={b.x} x={b.x} y={0} width={b.ancho} height={alto} />
      ))}
    </svg>
  )
}
