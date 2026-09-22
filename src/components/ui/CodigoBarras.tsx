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
      /* Un módulo = 1px: por debajo las barras estrechas se funden y deja de
         leerse. En pantallas estrechas max-w lo encoge antes que desbordar. */
      style={{ width: largo }}
      className={`h-8 max-w-[45vw] fill-current ${className}`}
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
