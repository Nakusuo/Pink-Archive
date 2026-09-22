import { useEffect } from 'react'
import { ARCHIVO } from '../config/archivo'

/** Pone el título de la pestaña y lo devuelve al del archivo al salir. */
export function useTituloDocumento(titulo?: string) {
  useEffect(() => {
    document.title = titulo ? `${titulo} — ${ARCHIVO.nombre}` : ARCHIVO.nombre
    return () => {
      document.title = ARCHIVO.nombre
    }
  }, [titulo])
}
