import type { EntradaArchivo } from '../types/objeto'

/* ---------------------------------------------------------------------------
   EL ARCHIVO
   Cada cosa que le hiciste es una entrada. El orden aquí da igual: el catálogo
   se numera solo por fecha (la más antigua es la 001).

   Las fechas marcadas «POR CONFIRMAR» son provisionales: los dibujos no
   traían fecha en sus metadatos.

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
    fecha: '2026-08-14', // POR CONFIRMAR
    tecnica: 'HTML, CSS y JavaScript',
    medidas: '5 recorridos',
    descripcion:
      'Un ramo de flores que se abre en cinco caminos: una carta, un jardín de recuerdos, una cajita con lo que no sé decirte, un viaje lejos de todo y lo que veo.',
    etiquetas: ['flores', 'carta', 'recuerdos'],
    medios: {
      imagen: 'archivo/te-hice-algo/portada.jpg',
      url: 'https://nakusuo.github.io/', // POR CONFIRMAR: la ruta completa del repo
    },
  },
  {
    id: 'bandito',
    titulo: 'Bandito',
    subtitulo: 'Edit con letra',
    tipo: 'video',
    fecha: '2026-03-20',
    tecnica: 'Edición de video',
    medidas: '0:36 min',
    descripcion:
      'Bandito y Paladin Strait de twenty one pilots, cara a cara, con la letra apareciendo en pantalla: «I\'m a ban-, I\'m a bandito».',
    etiquetas: ['twenty one pilots', 'música'],
    medios: {
      video: 'archivo/bandito/video.mp4',
      imagen: 'archivo/bandito/poster.jpg',
    },
  },
  {
    id: 'hayleys-show',
    titulo: "Hayley's show",
    subtitulo: 'Animación dibujada a mano',
    tipo: 'video',
    fecha: '2026-05-16',
    ocasion: 'Entradas para el concierto',
    tecnica: 'Animación digital',
    medidas: '0:20 min',
    descripcion:
      '«I\'ve got 2 tickets to Hayley\'s show, baby :D». Teenage Dirtbag reescrita para invitarte al concierto del 20 de noviembre: come with me Friday, don\'t say maybe.',
    etiquetas: ['animación', 'concierto', 'teenage dirtbag'],
    medios: {
      video: 'archivo/hayleys-show/video.mp4',
      imagen: 'archivo/hayleys-show/poster.jpg',
    },
  },
  {
    id: 'somewhere-in-the-crowd',
    titulo: 'Somewhere in the crowd',
    subtitulo: 'Animación corta',
    tipo: 'video',
    fecha: '2026-05-22',
    tecnica: 'Animación digital',
    medidas: '0:13 min',
    descripcion:
      '«But I won\'t feel like I always… \'cause somewhere in the crowd there\'s». Una multitud en gris, una cara tapada de azul que se descubre, y la frase cortada justo antes del final.',
    etiquetas: ['animación', 'música'],
    medios: {
      video: 'archivo/somewhere-in-the-crowd/video.mp4',
      imagen: 'archivo/somewhere-in-the-crowd/poster.jpg',
    },
  },
  {
    id: 'en-el-metro',
    titulo: 'En el metro',
    subtitulo: 'Ilustración digital',
    tipo: 'dibujo',
    fecha: '2026-03-28', // POR CONFIRMAR
    tecnica: 'Digital · Ibis Paint',
    medidas: '3072 × 3072 px',
    descripcion:
      'De pie en el metro: un brazo arriba en el pasamanos, una cabeza apoyada en el hombro y los ojos cerrados.',
    etiquetas: ['tú y yo'],
    medios: { imagen: 'archivo/en-el-metro/dibujo.jpg' },
  },
  {
    id: 'beso-en-el-otono',
    titulo: 'Beso en el otoño',
    subtitulo: 'Ilustración digital',
    tipo: 'dibujo',
    fecha: '2026-04-11', // POR CONFIRMAR
    tecnica: 'Digital · Ibis Paint',
    medidas: '2048 × 2048 px',
    descripcion:
      'De puntillas, con un pie en el aire y flores escondidas en la espalda. En la esquina, tú y yo otra vez, sin poder parar de reír.',
    etiquetas: ['tú y yo', 'otoño'],
    medios: { imagen: 'archivo/beso-en-el-otono/dibujo.jpg' },
  },
  {
    id: 'miradas',
    titulo: 'Miradas',
    subtitulo: 'Ilustración digital',
    tipo: 'dibujo',
    fecha: '2026-02-14', // POR CONFIRMAR
    tecnica: 'Digital · Ibis Paint',
    medidas: '4096 × 4096 px',
    descripcion: 'Dos pares de ojos en neón, uno rosa y otro azul, mirando fijo desde el negro.',
    etiquetas: ['neón'],
    medios: { imagen: 'archivo/miradas/dibujo.jpg' },
  },
  {
    id: 'party',
    titulo: 'Party',
    subtitulo: 'Retrato ilustrado',
    tipo: 'dibujo',
    fecha: '2026-01-10', // POR CONFIRMAR
    tecnica: 'Digital · Ibis Paint',
    medidas: '1280 × 1280 px',
    descripcion:
      'Chaqueta azul, guantes sin dedos, gafas y finger guns. Contorno naranja sobre fondo amarillo.',
    etiquetas: ['retrato'],
    medios: { imagen: 'archivo/party/dibujo.jpg' },
  },
]
