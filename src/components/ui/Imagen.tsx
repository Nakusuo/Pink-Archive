import { useState } from 'react'
import { rutaPublica } from '../../lib/formato'
import { MedioPendiente } from './MedioPendiente'

interface Props {
  src?: string
  alt: string
  className?: string
}

/** <img> que cae a MedioPendiente si no hay ruta o el archivo no carga. */
export function Imagen({ src, alt, className = '' }: Props) {
  const [fallo, setFallo] = useState(false)

  if (!src || fallo) return <MedioPendiente className={className} />

  return (
    <img
      src={rutaPublica(src)}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFallo(true)}
      className={`object-cover ${className}`}
    />
  )
}
