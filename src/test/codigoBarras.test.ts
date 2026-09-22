import { describe, expect, it } from 'vitest'
import { _patronesParaTest, codificarCode39 } from '../lib/codigoBarras'

describe('Code 39', () => {
  it('cada patrón tiene 9 elementos y exactamente 3 anchos', () => {
    for (const [caracter, patron] of Object.entries(_patronesParaTest)) {
      expect(patron, caracter).toHaveLength(9)
      expect([...patron].filter((e) => e === 'w'), caracter).toHaveLength(3)
    }
  })

  it('no repite patrones', () => {
    const valores = Object.values(_patronesParaTest)
    expect(new Set(valores).size).toBe(valores.length)
  })

  it('cada carácter aporta 5 barras, más inicio y fin', () => {
    const { barras } = codificarCode39('PA-001')
    expect(barras).toHaveLength((6 + 2) * 5)
  })

  it('mide 13 módulos por carácter más los separadores', () => {
    // 9 elementos: 6 estrechos + 3 anchos de 3 = 15 módulos, +1 de separador.
    const { largo } = codificarCode39('A')
    expect(largo).toBe(3 * 15 + 2)
  })

  it('rechaza caracteres fuera del alfabeto', () => {
    expect(() => codificarCode39('ñ')).toThrow()
    expect(() => codificarCode39('A*B')).toThrow()
  })
})
