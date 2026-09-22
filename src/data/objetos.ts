import type { EntradaArchivo } from '../types/objeto'

/* ---------------------------------------------------------------------------
   EL ARCHIVO
   Cada cosa que le hiciste es una entrada. El orden aquí da igual: el catálogo
   se numera solo por fecha (la más antigua es la 001).

   Las fechas marcadas «POR CONFIRMAR» son provisionales: los dibujos no
   traían fecha en sus metadatos, así que solo respetan el orden real.

   Archivos: pon las imágenes y vídeos en public/archivo/<id>/ y referéncialos
   como 'archivo/<id>/loquesea.png'. Si una ruta no existe, la ficha muestra
   «pendiente de digitalizar» en vez de romperse.
   --------------------------------------------------------------------------- */

export const ENTRADAS: EntradaArchivo[] = [
  // --- Dibujos y videos, en el orden en que se hicieron ---------------------
  {
    id: 'party',
    titulo: 'Party',
    subtitulo: 'Fanart',
    tipo: 'dibujo',
    fecha: '2026-02-15', // POR CONFIRMAR: antes del 20 de marzo
    ocasion: 'Recién nos conocimos',
    tecnica: 'Digital · Ibis Paint',
    medidas: '1280 × 1280 px',
    descripcion:
      'Un fanart, por decirlo así, de cuando recién te conocí: mi forma de decirte que te apreciaba. Chaqueta azul, guantes sin dedos, gafas y finger guns.',
    etiquetas: ['retrato', 'el primero'],
    medios: { imagen: 'archivo/party/dibujo.jpg' },
  },
  {
    id: 'bandito',
    titulo: 'Bandito',
    subtitulo: 'Edit con letra',
    tipo: 'video',
    fecha: '2026-03-20',
    ocasion: 'Después de ir al cine',
    tecnica: 'Edición de video',
    medidas: '0:36 min',
    descripcion:
      'Hecho después de que fuéramos al cine. Bandito y Paladin Strait de twenty one pilots, cara a cara, con la letra apareciendo en pantalla: «I\'m a ban-, I\'m a bandito».',
    etiquetas: ['twenty one pilots', 'música', 'cine'],
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
    ocasion: 'Invitarte a ver a Hayley Williams',
    tecnica: 'Animación digital',
    medidas: '0:20 min',
    descripcion:
      '«I\'ve got 2 tickets to Hayley\'s show, baby :D». Teenage Dirtbag reescrita para invitarte a ver a Hayley Williams conmigo el 20 de noviembre: come with me Friday, don\'t say maybe.',
    etiquetas: ['animación', 'concierto', 'hayley williams'],
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
    ocasion: 'Aniversario de amistad',
    tecnica: 'Animación digital',
    medidas: '0:13 min',
    descripcion:
      '«But I won\'t feel like I always… \'cause somewhere in the crowd there\'s». Una multitud en gris, una cara tapada de azul que se descubre, y la frase cortada justo antes del final.',
    etiquetas: ['animación', 'música', 'aniversario'],
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
    fecha: '2026-06-10', // POR CONFIRMAR
    ocasion: 'Nuestra salida',
    tecnica: 'Digital · Ibis Paint',
    medidas: '3072 × 3072 px',
    descripcion:
      'De pie en el metro: un brazo arriba en el pasamanos, una cabeza apoyada en el hombro y los ojos cerrados.',
    etiquetas: ['tú y yo', 'salida'],
    medios: { imagen: 'archivo/en-el-metro/dibujo.jpg' },
  },
  {
    id: 'miradas',
    titulo: 'Miradas',
    subtitulo: 'Ilustración digital',
    tipo: 'dibujo',
    fecha: '2026-07-05', // POR CONFIRMAR: antes de la FIL
    tecnica: 'Digital · Ibis Paint',
    medidas: '4096 × 4096 px',
    descripcion: 'Dos pares de ojos en neón, uno rosa y otro azul, mirando fijo desde el negro.',
    etiquetas: ['neón'],
    medios: { imagen: 'archivo/miradas/dibujo.jpg' },
  },
  {
    id: 'recuerdos-de-la-fil',
    titulo: 'Recuerdos de la FIL',
    subtitulo: 'Ilustración digital',
    tipo: 'dibujo',
    fecha: '2026-07-25', // POR CONFIRMAR
    ocasion: 'Nuestra primera cita oficial',
    tecnica: 'Digital · Ibis Paint',
    medidas: '2048 × 2048 px',
    descripcion:
      'Nuestra primera cita oficial fue en la FIL. De puntillas, con un pie en el aire y flores escondidas en la espalda; en la esquina, tú y yo otra vez, sin poder parar de reír.',
    etiquetas: ['tú y yo', 'FIL', 'primera cita'],
    medios: { imagen: 'archivo/recuerdos-de-la-fil/dibujo.jpg' },
  },

  // --- Webs: fechas, capturas y enlaces por completar -----------------------
  {
    id: '4skate',
    titulo: '4skate',
    subtitulo: 'Página web',
    tipo: 'web',
    fecha: '2026-08-05', // POR CONFIRMAR
    tecnica: 'HTML, CSS y JavaScript',
    descripcion: 'Descripción pendiente.',
    medios: {
      // imagen: 'archivo/4skate/portada.jpg',
      // url: 'https://…',
    },
  },
  {
    id: '5555',
    titulo: '5555',
    subtitulo: 'Página web',
    tipo: 'web',
    fecha: '2026-08-10', // POR CONFIRMAR
    tecnica: 'HTML, CSS y JavaScript',
    descripcion: 'Descripción pendiente.',
    medios: {
      // imagen: 'archivo/5555/portada.jpg',
      // url: 'https://…',
    },
  },
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
]
