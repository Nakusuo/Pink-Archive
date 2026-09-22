/* ---------------------------------------------------------------------------
   Datos generales del archivo. Todo lo personal del cartel sale de aquí.
   --------------------------------------------------------------------------- */

export const ARCHIVO = {
  nombre: 'Pink Archive',
  /** Prefijo del catálogo: sale en los códigos (PA-001) y en el sello. */
  prefijo: 'PA',
  coleccion: 'Colección personal',
  /** A quién está dedicado. Cámbialo por su nombre. */
  para: 'para ti',
  dedicatoria:
    'Todo lo que te he hecho, catalogado como si fuera de museo. Porque para mí lo es.',
  /** Año de apertura del archivo, para el pie. */
  desde: 2025,
} as const

/** Cómo se nombra cada tipo en las fichas y los filtros. */
export const TIPOS = {
  web: { singular: 'Web', plural: 'Webs', soporte: 'Disquete · 3.5"' },
  dibujo: { singular: 'Dibujo', plural: 'Dibujos', soporte: 'Lámina' },
  video: { singular: 'Video', plural: 'Videos', soporte: 'Cinta' },
  carta: { singular: 'Carta', plural: 'Cartas', soporte: 'Papel' },
  otro: { singular: 'Objeto', plural: 'Otros', soporte: 'Varios' },
} as const
