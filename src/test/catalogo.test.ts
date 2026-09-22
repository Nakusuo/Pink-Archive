import { describe, expect, it } from 'vitest'
import { agruparPorAnio, catalogar } from '../lib/catalogo'
import type { EntradaArchivo } from '../types/objeto'

function entrada(id: string, fecha: string): EntradaArchivo {
  return {
    id, fecha, titulo: id, subtitulo: '', tipo: 'dibujo',
    descripcion: '', tecnica: '', medios: {},
  }
}

describe('catalogar', () => {
  it('numera por fecha, no por orden de escritura', () => {
    const c = catalogar([entrada('b', '2026-05-01'), entrada('a', '2025-01-01')])
    expect(c.map((o) => [o.id, o.codigo])).toEqual([
      ['a', 'PA-001'],
      ['b', 'PA-002'],
    ])
  })

  it('desempata la misma fecha por id', () => {
    const c = catalogar([entrada('z', '2026-01-01'), entrada('m', '2026-01-01')])
    expect(c.map((o) => o.id)).toEqual(['m', 'z'])
  })

  it('pone el año de la fecha en el número de documento', () => {
    const [o] = catalogar([entrada('a', '2025-12-24')])
    expect(o.documento).toBe('PA.001.2025')
    expect(o.estado).toBe('Archivado')
  })

  it('se niega a catalogar ids repetidos', () => {
    expect(() => catalogar([entrada('a', '2026-01-01'), entrada('a', '2026-02-01')])).toThrow()
  })

  it('agrupa por año del más reciente al más antiguo', () => {
    const c = catalogar([entrada('a', '2025-01-01'), entrada('b', '2026-01-01'), entrada('c', '2026-06-01')])
    expect(agruparPorAnio(c).map(([anio, os]) => [anio, os.map((o) => o.id)])).toEqual([
      [2026, ['c', 'b']],
      [2025, ['a']],
    ])
  })
})
