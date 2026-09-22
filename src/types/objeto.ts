/** Qué clase de cosa es. Decide la «carcasa» con la que se exhibe en la ficha. */
export type TipoObjeto = 'web' | 'dibujo' | 'video' | 'carta' | 'otro'

/**
 * Lo que se escribe a mano en src/data/objetos.ts. El número de catálogo,
 * el código y demás se calculan solos (ver lib/catalogo.ts): así añadir un
 * objeto nunca obliga a renumerar los demás.
 */
export interface EntradaArchivo {
  /** Identificador para la URL: minúsculas y guiones. */
  id: string
  titulo: string
  /** Línea bajo el título, como «Página web interactiva». */
  subtitulo: string
  tipo: TipoObjeto
  /** 'AAAA-MM-DD'. Ordena el catálogo. */
  fecha: string
  descripcion: string
  /** Herramientas o técnica: «HTML, CSS y JS», «Digital · Ibis Paint». */
  tecnica: string
  /** Por qué se hizo: «Sin motivo», «Aniversario», «Su cumpleaños». */
  ocasion?: string
  /** Tamaño, duración o extensión: «1080 × 1080 px», «0:20 min». */
  medidas?: string
  /** Por defecto «Archivado». */
  estado?: string
  etiquetas?: string[]
  medios: MediosObjeto
  /** Texto largo opcional: la carta en sí, o lo que había detrás del objeto. */
  texto?: string
}

export interface MediosObjeto {
  /** Imagen principal o miniatura, ruta dentro de /public. */
  imagen?: string
  /** Vídeo (mp4/webm) dentro de /public o URL absoluta. */
  video?: string
  /** Enlace externo: la web publicada, un post, etc. */
  url?: string
  /** Imágenes extra para la galería de la ficha. */
  galeria?: string[]
}

/** Una entrada ya catalogada, lista para pintar. */
export interface ObjetoArchivo extends EntradaArchivo {
  numero: number
  /** «PA-007»: va en la etiqueta y en el código de barras. */
  codigo: string
  /** «PA.007.2026»: el número de documento del pie. */
  documento: string
  estado: string
}
