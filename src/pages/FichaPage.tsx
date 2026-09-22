import { Link, useParams } from 'react-router-dom'
import { PieDocumento } from '../components/layout/PieDocumento'
import { Carcasa } from '../components/objetos/Carcasa'
import { VistaWeb } from '../components/objetos/VistaWeb'
import { CajaSello } from '../components/ui/CajaSello'
import { Campo } from '../components/ui/Campo'
import { Emblema } from '../components/ui/Emblema'
import { Regla } from '../components/ui/Regla'
import { ARCHIVO, TIPOS } from '../config/archivo'
import { useTituloDocumento } from '../hooks/useTituloDocumento'
import { buscarObjeto, vecinos } from '../lib/catalogo'
import { fechaLarga, numeroCatalogo, partirFecha } from '../lib/formato'
import type { ObjetoArchivo } from '../types/objeto'
import { NoEncontradoPage } from './NoEncontradoPage'

/* La ficha replica el cartel de museo de arriba abajo: cabecera con número y
   sello, título, el objeto exhibido y la rejilla de datos con reglas finas. */
export function FichaPage() {
  const { id = '' } = useParams()
  const objeto = buscarObjeto(id)
  useTituloDocumento(objeto && `${objeto.codigo} · ${objeto.titulo}`)

  if (!objeto) return <NoEncontradoPage />

  const tipo = TIPOS[objeto.tipo]
  const { anio } = partirFecha(objeto.fecha)
  const { anterior, siguiente } = vecinos(objeto.id)
  const conVista = objeto.tipo === 'web'
  // En las cartas el texto ya está en la hoja; no se repite abajo.
  const notaAparte = objeto.texto && objeto.tipo !== 'carta'

  return (
    <article className="pt-8 pb-10">
      <header className="flex items-start justify-between gap-6">
        <div>
          <p className="text-sm font-bold tracking-wide uppercase">Objeto</p>
          <p className="titular text-7xl text-rosa-tinta sm:text-8xl">
            {numeroCatalogo(objeto.numero)}
          </p>
          <p className="mt-5 text-sm font-bold tracking-wide uppercase">Archivo de {tipo.plural}</p>
          <p className="text-sm tracking-wide uppercase">
            {ARCHIVO.nombre} · {ARCHIVO.coleccion}
          </p>
        </div>
        <div className="flex flex-col items-end gap-6">
          <CajaSello lineas={[ARCHIVO.prefijo, 'Archivo', 'Objeto']} className="w-32" />
          <Emblema className="text-rosa" />
        </div>
      </header>

      <Regla className="mt-6" />

      <div className="pt-6">
        <h1 className="titular text-5xl break-words sm:text-7xl">{objeto.titulo}</h1>
        <p className="mt-2 text-lg font-semibold tracking-wide uppercase">{objeto.subtitulo}</p>
        <p className="text-2xl font-bold">{anio}</p>
      </div>

      <div
        className={`py-10 ${conVista ? 'grid items-center gap-10 md:grid-cols-[1.4fr_1fr]' : ''}`}
      >
        <Carcasa objeto={objeto} />
        {conVista && <VistaWeb objeto={objeto} />}
      </div>

      <Datos objeto={objeto} />

      {notaAparte && (
        <section className="border-t border-tinta py-6">
          <p className="rotulo text-rosa-tinta">Notas del archivo</p>
          <p className="mt-2 max-w-2xl leading-relaxed whitespace-pre-line">{objeto.texto}</p>
        </section>
      )}

      <PieDocumento documento={objeto.documento} />

      <nav className="mt-8 grid grid-cols-2 gap-4" aria-label="Otros objetos">
        {anterior ? (
          <Link to={`/objeto/${anterior.id}`} className="group">
            <p className="rotulo text-tinta-suave">← Anterior · {anterior.codigo}</p>
            <p className="titular mt-1 text-2xl group-hover:text-rosa-tinta">{anterior.titulo}</p>
          </Link>
        ) : (
          <span />
        )}
        {siguiente && (
          <Link to={`/objeto/${siguiente.id}`} className="group text-right">
            <p className="rotulo text-tinta-suave">{siguiente.codigo} · Siguiente →</p>
            <p className="titular mt-1 text-2xl group-hover:text-rosa-tinta">{siguiente.titulo}</p>
          </Link>
        )}
      </nav>
    </article>
  )
}

/** Las tres franjas de datos del cartel, con sus separadores verticales. */
function Datos({ objeto }: { objeto: ObjetoArchivo }) {
  const tipo = TIPOS[objeto.tipo]
  const celda = 'py-3 sm:px-4 sm:first:pl-0 sm:[&+&]:border-l sm:[&+&]:border-tinta'

  return (
    <dl>
      <div className="grid gap-y-3 border-t border-tinta py-3 sm:grid-cols-[3fr_1fr]">
        <div className="py-3 text-base leading-snug font-semibold uppercase sm:pr-4">
          <p>{objeto.subtitulo}</p>
          <p>{tipo.soporte}</p>
        </div>
        <Campo etiqueta="Formato" className={`${celda} sm:border-l sm:border-tinta`}>
          <span className="uppercase">{objeto.medidas ?? '—'}</span>
        </Campo>
      </div>

      <div className="grid grid-cols-2 border-t border-tinta sm:grid-cols-4">
        <Campo etiqueta="Fecha" className={celda}>{fechaLarga(objeto.fecha)}</Campo>
        <Campo etiqueta="Ocasión" className={celda}>{objeto.ocasion ?? 'Porque sí'}</Campo>
        <Campo etiqueta="Técnica" className={celda}>{objeto.tecnica}</Campo>
        <Campo etiqueta="Estado" className={celda}>
          <span className="uppercase">{objeto.estado}</span>
        </Campo>
      </div>

      <div className="grid grid-cols-2 border-t border-tinta sm:grid-cols-4">
        <Campo etiqueta="Descripción" className={`col-span-2 ${celda}`}>
          <span className="font-normal">{objeto.descripcion}</span>
        </Campo>
        <Campo etiqueta="Código" className={celda}>
          <span className="font-mono">{objeto.codigo}</span>
        </Campo>
        <Campo etiqueta="Etiquetas" className={celda}>
          {objeto.etiquetas?.length ? objeto.etiquetas.join(' · ') : '—'}
        </Campo>
      </div>
    </dl>
  )
}
