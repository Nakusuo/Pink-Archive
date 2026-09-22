import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FiltroTipos } from '../components/objetos/FiltroTipos'
import { TarjetaObjeto } from '../components/objetos/TarjetaObjeto'
import { PieDocumento } from '../components/layout/PieDocumento'
import { CajaSello } from '../components/ui/CajaSello'
import { Emblema } from '../components/ui/Emblema'
import { Regla } from '../components/ui/Regla'
import { ARCHIVO, TIPOS } from '../config/archivo'
import { CATALOGO, contarPorTipo } from '../lib/catalogo'
import { numeroCatalogo, partirFecha } from '../lib/formato'
import type { TipoObjeto } from '../types/objeto'

function esTipo(valor: string | null): valor is TipoObjeto {
  return valor !== null && valor in TIPOS
}

/* El filtro y el orden viven en la URL (?tipo=dibujo&orden=antiguos): así
   se pueden compartir y el botón atrás desde una ficha vuelve al mismo sitio. */
export function IndicePage() {
  const [params, setParams] = useSearchParams()
  const tipoParam = params.get('tipo')
  const tipo = esTipo(tipoParam) ? tipoParam : null
  const antiguosPrimero = params.get('orden') === 'antiguos'

  const cuenta = useMemo(() => contarPorTipo(CATALOGO), [])
  const visibles = useMemo(() => {
    const filtrados = tipo ? CATALOGO.filter((o) => o.tipo === tipo) : CATALOGO
    return antiguosPrimero ? filtrados : [...filtrados].reverse()
  }, [tipo, antiguosPrimero])

  const anios = CATALOGO.map((o) => partirFecha(o.fecha).anio)
  const rango =
    anios.length === 0
      ? '—'
      : Math.min(...anios) === Math.max(...anios)
        ? `${anios[0]}`
        : `${Math.min(...anios)} — ${Math.max(...anios)}`

  function actualizar(cambios: Record<string, string | null>) {
    const siguiente = new URLSearchParams(params)
    for (const [clave, valor] of Object.entries(cambios)) {
      if (valor === null) siguiente.delete(clave)
      else siguiente.set(clave, valor)
    }
    setParams(siguiente, { replace: true })
  }

  return (
    <div className="pt-8 pb-10">
      {/* Cabecera del cartel */}
      <header className="flex items-start justify-between gap-6">
        <div>
          <p className="text-sm font-bold tracking-wide uppercase">Archivo</p>
          <p className="titular text-7xl text-rosa-tinta sm:text-8xl">
            {numeroCatalogo(CATALOGO.length)}
          </p>
          <p className="mt-5 text-sm font-bold tracking-wide uppercase">{ARCHIVO.coleccion}</p>
          <p className="text-sm tracking-wide uppercase">
            {ARCHIVO.nombre} · {ARCHIVO.para}
          </p>
        </div>
        <div className="flex flex-col items-end gap-6">
          <CajaSello lineas={[ARCHIVO.prefijo, 'Archivo', 'Objetos']} className="w-32" />
          <Emblema className="text-rosa" />
        </div>
      </header>

      <Regla className="mt-6" />

      <section className="grid gap-6 py-6 md:grid-cols-[1fr_20rem] md:items-end">
        <div>
          <h1 className="titular text-6xl sm:text-8xl">{ARCHIVO.nombre}</h1>
          <p className="mt-2 text-lg font-semibold tracking-wide uppercase">
            Todo lo que te he hecho
          </p>
          <p className="text-2xl font-bold">{rango}</p>
        </div>
        <p className="border-l-2 border-rosa pl-4 text-sm leading-relaxed text-tinta-suave">
          {ARCHIVO.dedicatoria}
        </p>
      </section>

      <Regla />

      <div className="flex flex-wrap items-center justify-between gap-4 py-4">
        <FiltroTipos
          activo={tipo}
          cuenta={cuenta}
          total={CATALOGO.length}
          onCambiar={(t) => actualizar({ tipo: t })}
        />
        <button
          type="button"
          onClick={() => actualizar({ orden: antiguosPrimero ? null : 'antiguos' })}
          className="rotulo underline decoration-rosa decoration-2 underline-offset-4 hover:text-rosa-tinta"
        >
          {antiguosPrimero ? 'Más antiguos primero ↑' : 'Más recientes primero ↓'}
        </button>
      </div>

      {visibles.length === 0 ? (
        <p className="rotulo py-16 text-center text-tinta-suave">
          Todavía no hay nada catalogado aquí.
        </p>
      ) : (
        <ul className="grid gap-5 pb-10 sm:grid-cols-2 lg:grid-cols-3">
          {visibles.map((objeto) => (
            <li key={objeto.id}>
              <TarjetaObjeto objeto={objeto} />
            </li>
          ))}
        </ul>
      )}

      <PieDocumento
        documento={`${ARCHIVO.prefijo}.INDICE.${partirFecha(CATALOGO.at(-1)?.fecha ?? `${ARCHIVO.desde}-01-01`).anio}`}
      />
    </div>
  )
}
