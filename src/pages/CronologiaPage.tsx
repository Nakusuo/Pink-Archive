import { Link } from 'react-router-dom'
import { PieDocumento } from '../components/layout/PieDocumento'
import { Regla } from '../components/ui/Regla'
import { ARCHIVO, TIPOS } from '../config/archivo'
import { useTituloDocumento } from '../hooks/useTituloDocumento'
import { agruparPorAnio, CATALOGO } from '../lib/catalogo'
import { nombreMes, numeroCatalogo, partirFecha } from '../lib/formato'

/* Libro de registro: como el inventario de entradas de un museo, una línea
   por objeto y agrupado por año, del más reciente al más antiguo. */
export function CronologiaPage() {
  useTituloDocumento('Cronología')
  const grupos = agruparPorAnio(CATALOGO)

  return (
    <div className="pt-8 pb-10">
      <p className="text-sm font-bold tracking-wide uppercase">Registro</p>
      <h1 className="titular text-6xl sm:text-8xl">Cronología</h1>
      <p className="mt-2 text-lg font-semibold tracking-wide uppercase">
        Libro de entradas del archivo
      </p>

      <Regla className="mt-6" gruesa />

      {grupos.map(([anio, objetos]) => (
        <section key={anio} className="grid gap-4 border-b border-tinta py-8 last-of-type:border-b-0 md:grid-cols-[12rem_1fr]">
          <header className="md:sticky md:top-6 md:self-start">
            <h2 className="titular text-7xl text-rosa-tinta">{anio}</h2>
            <p className="rotulo mt-1">
              {numeroCatalogo(objetos.length, 2)} {objetos.length === 1 ? 'objeto' : 'objetos'}
            </p>
          </header>

          <ol>
            {objetos.map((o) => {
              const { dia, mes } = partirFecha(o.fecha)
              return (
                <li key={o.id} className="border-t border-tinta/25 first:border-t-0">
                  <Link
                    to={`/objeto/${o.id}`}
                    className="group grid grid-cols-[4.5rem_1fr_auto] items-baseline gap-x-4 py-3 transition-colors hover:bg-rosa-palido/60 sm:grid-cols-[6rem_5rem_1fr_6rem_1rem]"
                  >
                    <span className="font-mono text-xs">
                      {String(dia).padStart(2, '0')} {nombreMes(mes).slice(0, 3)}
                    </span>
                    <span className="hidden font-mono text-xs text-rosa-tinta sm:block">{o.codigo}</span>
                    <span className="min-w-0">
                      <span className="titular block text-2xl group-hover:text-rosa-tinta">{o.titulo}</span>
                      <span className="rotulo text-tinta-suave">{o.subtitulo}</span>
                    </span>
                    <span className="rotulo text-right">{TIPOS[o.tipo].singular}</span>
                    <span className="hidden text-right transition-transform group-hover:translate-x-1 sm:block" aria-hidden>
                      →
                    </span>
                  </Link>
                </li>
              )
            })}
          </ol>
        </section>
      ))}

      <div className="pt-8">
        <PieDocumento documento={`${ARCHIVO.prefijo}.REGISTRO.${grupos[0]?.[0] ?? ARCHIVO.desde}`} />
      </div>
    </div>
  )
}
