import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { ARCHIVO } from '../../config/archivo'

interface Props {
  children: ReactNode
}

function enlace({ isActive }: { isActive: boolean }) {
  return `rotulo px-2 py-1 transition-colors ${
    isActive ? 'bg-tinta text-papel' : 'hover:text-rosa-tinta'
  }`
}

/** El pliego: ancho de cartel, barra superior mínima y pie común. */
export function Marco({ children }: Props) {
  return (
    <div className="mx-auto flex min-h-dvh max-w-6xl flex-col px-4 sm:px-8">
      <nav
        className="flex items-center justify-between gap-4 border-b border-tinta/15 py-3"
        aria-label="Principal"
      >
        <NavLink to="/" className="rotulo tracking-[0.18em]">
          {ARCHIVO.nombre}
        </NavLink>
        <div className="flex gap-1">
          <NavLink to="/" end className={enlace}>
            Índice
          </NavLink>
          <NavLink to="/cronologia" className={enlace}>
            Cronología
          </NavLink>
        </div>
      </nav>

      <main className="flex-1">{children}</main>

      <footer className="rotulo flex flex-wrap justify-between gap-2 border-t border-tinta/15 py-4 text-tinta-suave">
        <span>
          {ARCHIVO.nombre} · {ARCHIVO.coleccion}
        </span>
        <span>Archivado con cariño desde {ARCHIVO.desde}</span>
      </footer>
    </div>
  )
}
