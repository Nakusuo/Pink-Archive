/** 7 → "007". El catálogo siempre se lee a tres cifras, como en los carteles. */
export function numeroCatalogo(n: number, cifras = 3): string {
  return String(n).padStart(cifras, '0')
}

const MESES = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
]

/* Las fechas se guardan como 'AAAA-MM-DD' y se parten a mano: con
   new Date('2026-03-01') el navegador la toma como UTC y en Perú saldría
   el 28 de febrero. */
export function partirFecha(iso: string): { anio: number; mes: number; dia: number } {
  const [anio, mes, dia] = iso.split('-').map(Number)
  return { anio, mes, dia }
}

/** "2026-03-14" → "14 marzo 2026" */
export function fechaLarga(iso: string): string {
  const { anio, mes, dia } = partirFecha(iso)
  return `${dia} ${MESES[mes - 1]} ${anio}`
}

/** "2026-03-14" → "14.03.26" */
export function fechaCorta(iso: string): string {
  const { anio, mes, dia } = partirFecha(iso)
  return `${String(dia).padStart(2, '0')}.${String(mes).padStart(2, '0')}.${String(anio).slice(-2)}`
}

export function nombreMes(mes: number): string {
  return MESES[mes - 1]
}

/** Resuelve una ruta de /public respetando la base relativa del build. */
export function rutaPublica(ruta: string): string {
  if (/^(https?:)?\/\//.test(ruta)) return ruta
  return `${import.meta.env.BASE_URL}${ruta.replace(/^\//, '')}`
}
