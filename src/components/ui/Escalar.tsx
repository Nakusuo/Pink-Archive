import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'

interface Props {
  /** Ancho en px al que está diseñado el contenido. */
  anchoBase: number
  children: ReactNode
  className?: string
}

/* Escala el contenido entero (texto incluido) para que ocupe el ancho del
   contenedor, como si fuera una imagen. Lo usa la etiqueta del disquete, que
   tiene que verse igual de compuesta en un móvil que en un monitor. */
export function Escalar({ anchoBase, children, className = '' }: Props) {
  const caja = useRef<HTMLDivElement>(null)
  const [escala, setEscala] = useState(1)

  useLayoutEffect(() => {
    const el = caja.current
    if (!el) return
    const observador = new ResizeObserver(([entrada]) => {
      setEscala(entrada.contentRect.width / anchoBase)
    })
    observador.observe(el)
    return () => observador.disconnect()
  }, [anchoBase])

  return (
    <div ref={caja} className={`overflow-hidden ${className}`}>
      <div style={{ width: anchoBase, transform: `scale(${escala})`, transformOrigin: 'top left' }}>
        {children}
      </div>
    </div>
  )
}
