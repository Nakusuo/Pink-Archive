import type { EntradaArchivo } from '../types/objeto'

/* ---------------------------------------------------------------------------
   EL ARCHIVO
   Cada cosa que le hiciste es una entrada. El orden aquí da igual: el catálogo
   se numera solo por fecha (la más antigua es la 001).

   Archivos: pon las imágenes y vídeos en public/archivo/<id>/ y referéncialos
   como 'archivo/<id>/loquesea.png'. Si una ruta no existe, la ficha muestra
   «pendiente de digitalizar» en vez de romperse.
   --------------------------------------------------------------------------- */

export const ENTRADAS: EntradaArchivo[] = [
  {
    id: 'te-hice-algo',
    titulo: 'Te hice algo',
    subtitulo: 'Página web interactiva',
    tipo: 'web',
    fecha: '2026-08-14',
    ocasion: 'Sin motivo',
    tecnica: 'HTML, CSS y JavaScript',
    medidas: '5 recorridos',
    descripcion:
      'Un ramo de flores que se abre en cinco caminos: una carta, un jardín de recuerdos, una cajita con lo que no sé decirte, un viaje lejos de todo y lo que veo.',
    etiquetas: ['flores', 'carta', 'recuerdos'],
    medios: {
      imagen: 'archivo/te-hice-algo/portada.jpg',
      url: 'https://nakusuo.github.io/',
    },
  },
  {
    id: 'hayleys-show',
    titulo: "Hayley's show",
    subtitulo: 'Animación cuadro a cuadro',
    tipo: 'video',
    fecha: '2026-06-02',
    ocasion: 'Entradas para el concierto',
    tecnica: 'Animación digital',
    medidas: '0:20 min',
    descripcion:
      '«I\'ve got 2 tickets to Hayley\'s show, baby :D». La forma más dramática posible de avisarte que teníamos entradas.',
    etiquetas: ['animación', 'concierto'],
    medios: {
      video: 'archivo/hayleys-show/video.mp4',
      imagen: 'archivo/hayleys-show/poster.jpg',
    },
  },
  {
    id: 'silueta-azul',
    titulo: 'Silueta azul',
    subtitulo: 'Animación corta',
    tipo: 'video',
    fecha: '2026-05-20',
    tecnica: 'Animación digital',
    medidas: '0:13 min',
    descripcion: 'Una silueta azul que aparece entre nubes dibujadas a mano.',
    medios: {
      video: 'archivo/silueta-azul/video.mp4',
      imagen: 'archivo/silueta-azul/poster.jpg',
    },
  },
  {
    id: 'beso-en-el-otono',
    titulo: 'Beso en el otoño',
    subtitulo: 'Ilustración digital',
    tipo: 'dibujo',
    fecha: '2026-04-11',
    ocasion: 'Aniversario',
    tecnica: 'Digital · Ibis Paint',
    medidas: '2048 × 2048 px',
    descripcion:
      'De puntillas, con un pie en el aire y flores escondidas en la espalda. En la esquina, tú y yo otra vez, sin poder parar de reír.',
    etiquetas: ['tú y yo', 'otoño'],
    medios: { imagen: 'archivo/beso-en-el-otono/dibujo.png' },
  },
  {
    id: 'la-foto',
    titulo: 'La foto',
    subtitulo: 'Ilustración digital',
    tipo: 'dibujo',
    fecha: '2026-03-28',
    tecnica: 'Digital · Ibis Paint',
    medidas: '2048 × 2048 px',
    descripcion: 'El brazo arriba para la selfie y tú apoyándote en mí. Así quiero que nos acuerden.',
    etiquetas: ['tú y yo'],
    medios: { imagen: 'archivo/la-foto/dibujo.png' },
  },
  {
    id: 'primera-carta',
    titulo: 'Primera carta',
    subtitulo: 'Carta escrita a mano',
    tipo: 'carta',
    fecha: '2025-12-24',
    ocasion: 'Navidad',
    tecnica: 'Tinta sobre papel',
    medidas: '1 hoja',
    descripcion: 'La primera vez que te escribí algo largo. Transcrita aquí para que no se pierda.',
    medios: {},
    texto:
      'Aquí va el texto de la carta.\n\nCada salto de línea doble es un párrafo nuevo, así que puedes pegarla tal cual la escribiste.',
  },
]
