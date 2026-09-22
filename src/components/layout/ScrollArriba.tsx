import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/* El router no resetea el scroll: al saltar de una ficha a la siguiente desde
   el pie, se aterrizaría a media página. Solo mira el pathname para que
   cambiar el filtro del índice (?tipo=) no te suba de golpe. */
export function ScrollArriba() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
