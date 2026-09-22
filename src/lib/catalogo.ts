import { ARCHIVO } from '../config/archivo'
import { ENTRADAS } from '../data/objetos'
import type { EntradaArchivo, ObjetoArchivo, TipoObjeto } from '../types/objeto'
import { numeroCatalogo, partirFecha } from './formato'

/**
 * Numera las entradas por fecha (la más antigua es la 001) y deriva sus
 * códigos. A igual fecha desempata el id, para que el orden no dependa de
 * cómo esté escrito el array.
 */
export function catalogar(entradas: EntradaArchivo[]): ObjetoArchivo[] {
  const ids = new Set<string>()
  for (const e of entradas) {
    if (ids.has(e.id)) throw new Error(`Id repetido en el archivo: «${e.id}»`)
    ids.add(e.id)
  }

  return [...entradas]
    .sort((a, b) => a.fecha.localeCompare(b.fecha) || a.id.localeCompare(b.id))
    .map((entrada, i) => {
      const numero = i + 1
      const nn = numeroCatalogo(numero)
      return {
        ...entrada,
        numero,
        codigo: `${ARCHIVO.prefijo}-${nn}`,
        documento: `${ARCHIVO.prefijo}.${nn}.${partirFecha(entrada.fecha).anio}`,
        estado: entrada.estado ?? 'Archivado',
      }
    })
}

/** El catálogo completo, del más antiguo al más reciente. */
export const CATALOGO: ObjetoArchivo[] = catalogar(ENTRADAS)

export function buscarObjeto(id: string): ObjetoArchivo | undefined {
  return CATALOGO.find((o) => o.id === id)
}

/** Anterior y siguiente en el orden del catálogo, sin dar la vuelta. */
export function vecinos(id: string): { anterior?: ObjetoArchivo; siguiente?: ObjetoArchivo } {
  const i = CATALOGO.findIndex((o) => o.id === id)
  if (i === -1) return {}
  return { anterior: CATALOGO[i - 1], siguiente: CATALOGO[i + 1] }
}

export function contarPorTipo(objetos: ObjetoArchivo[]): Record<TipoObjeto, number> {
  const cuenta: Record<TipoObjeto, number> = { web: 0, dibujo: 0, video: 0, carta: 0, otro: 0 }
  for (const o of objetos) cuenta[o.tipo]++
  return cuenta
}

/** Agrupa por año, del más reciente al más antiguo, para la cronología. */
export function agruparPorAnio(objetos: ObjetoArchivo[]): [number, ObjetoArchivo[]][] {
  const grupos = new Map<number, ObjetoArchivo[]>()
  for (const o of [...objetos].reverse()) {
    const { anio } = partirFecha(o.fecha)
    grupos.set(anio, [...(grupos.get(anio) ?? []), o])
  }
  return [...grupos.entries()]
}
