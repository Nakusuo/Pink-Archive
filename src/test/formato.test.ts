import { describe, expect, it } from 'vitest'
import { fechaCorta, fechaLarga, numeroCatalogo } from '../lib/formato'

describe('formato', () => {
  it('rellena el número de catálogo a tres cifras', () => {
    expect(numeroCatalogo(7)).toBe('007')
    expect(numeroCatalogo(1234)).toBe('1234')
  })

  it('no desplaza el día por la zona horaria', () => {
    expect(fechaLarga('2026-03-01')).toBe('1 marzo 2026')
    expect(fechaCorta('2026-03-01')).toBe('01.03.26')
  })
})
