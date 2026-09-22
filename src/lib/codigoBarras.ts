/* ---------------------------------------------------------------------------
   Code 39: el código de barras de las fichas es real y se puede escanear.
   Cada carácter son 9 elementos (5 barras y 4 espacios alternos, empezando
   por barra); exactamente 3 son anchos. Entre caracteres va un espacio
   estrecho y el texto se envuelve en asteriscos, que hacen de inicio/fin.
   --------------------------------------------------------------------------- */

const PATRONES: Record<string, string> = {
  '0': 'nnnwwnwnn', '1': 'wnnwnnnnw', '2': 'nnwwnnnnw', '3': 'wnwwnnnnn',
  '4': 'nnnwwnnnw', '5': 'wnnwwnnnn', '6': 'nnwwwnnnn', '7': 'nnnwnnwnw',
  '8': 'wnnwnnwnn', '9': 'nnwwnnwnn', A: 'wnnnnwnnw', B: 'nnwnnwnnw',
  C: 'wnwnnwnnn', D: 'nnnnwwnnw', E: 'wnnnwwnnn', F: 'nnwnwwnnn',
  G: 'nnnnnwwnw', H: 'wnnnnwwnn', I: 'nnwnnwwnn', J: 'nnnnwwwnn',
  K: 'wnnnnnnww', L: 'nnwnnnnww', M: 'wnwnnnnwn', N: 'nnnnwnnww',
  O: 'wnnnwnnwn', P: 'nnwnwnnwn', Q: 'nnnnnnwww', R: 'wnnnnnwwn',
  S: 'nnwnnnwwn', T: 'nnnnwnwwn', U: 'wwnnnnnnw', V: 'nwwnnnnnw',
  W: 'wwwnnnnnn', X: 'nwnnwnnnw', Y: 'wwnnwnnnn', Z: 'nwwnwnnnn',
  '-': 'nwnnnnwnw', '.': 'wwnnnnwnn', ' ': 'nwwnnnwnn', '*': 'nwnnwnwnn',
}

export interface Barra {
  /** Posición en módulos desde el borde izquierdo. */
  x: number
  /** Ancho en módulos (1 estrecho, `RELACION` ancho). */
  ancho: number
}

/** Un elemento ancho mide 3 estrechos: la relación más fácil de leer. */
const RELACION = 3

export function codificarCode39(texto: string): { barras: Barra[]; largo: number } {
  const limpio = texto.toUpperCase()
  const invalido = [...limpio].find((c) => !(c in PATRONES) || c === '*')
  if (invalido !== undefined) {
    throw new Error(`Code 39 no admite el carácter «${invalido}»`)
  }

  const barras: Barra[] = []
  let x = 0

  for (const caracter of `*${limpio}*`) {
    const patron = PATRONES[caracter]
    for (let i = 0; i < patron.length; i++) {
      const ancho = patron[i] === 'w' ? RELACION : 1
      // Posiciones pares = barra, impares = espacio.
      if (i % 2 === 0) barras.push({ x, ancho })
      x += ancho
    }
    x += 1 // separador entre caracteres
  }

  return { barras, largo: x - 1 }
}

export const _patronesParaTest = PATRONES
