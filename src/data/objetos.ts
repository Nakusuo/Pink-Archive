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
  // --- Dibujos y videos ------------------------------------------------------
  {
    id: 'party',
    titulo: 'Party Poison',
    subtitulo: 'Fanart',
    tipo: 'dibujo',
    fecha: '2026-02-25', // POR CONFIRMAR: poco después de conocerse (los 4 meses caen el 20/06)
    ocasion: 'Recién te conocí',
    tecnica: 'Digital · Ibis Paint',
    medidas: '1280 × 1280 px',
    descripcion:
      'Tú vestida de Party Poison, de cuando recién te conocí. Mi forma de decirte «te aprecio», jaja: chaqueta azul, guantes sin dedos, gafas y finger guns.',
    etiquetas: ['fanart', 'killjoys', 'el primero'],
    medios: { imagen: 'archivo/party/dibujo.jpg' },
  },
  {
    id: 'bandito',
    titulo: 'Bandito',
    subtitulo: 'Edit con letra',
    tipo: 'video',
    fecha: '2026-03-20',
    ocasion: 'Un trend, después del cine',
    tecnica: 'Edición de video',
    medidas: '0:36 min',
    descripcion:
      'Lo hicimos siguiendo un trend de twenty one pilots, después de ir al cine: Bandito y Paladin Strait cara a cara, con la letra apareciendo en pantalla. «I\'m a ban-, I\'m a bandito».',
    etiquetas: ['twenty one pilots', 'trend', 'cine'],
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
      '«I\'ve got 2 tickets to Hayley\'s show, baby :D». Teenage Dirtbag reescrita para invitarte a ver a Hayley Williams conmigo: come with me Friday, don\'t say maybe. Quedaba perfecto… hasta que movieron el show para un sábado.',
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
      'Así me siento desde que te conocí: en medio de toda la gente, cuando estoy contigo, ya no me siento sola. «\'Cause somewhere in the crowd there\'s you».',
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
    fecha: '2026-06-05', // POR CONFIRMAR
    ocasion: 'Volviendo juntas',
    tecnica: 'Digital · Ibis Paint',
    medidas: '3072 × 3072 px',
    descripcion:
      'Ese momento en que regresamos juntas en el metro y algo empezaba a surgir.',
    etiquetas: ['tú y yo', 'metro', 'el comienzo'],
    medios: { imagen: 'archivo/en-el-metro/dibujo.jpg' },
  },
  {
    id: 'miradas',
    titulo: 'Miradas',
    subtitulo: 'Ilustración digital',
    tipo: 'dibujo',
    fecha: '2026-06-15', // POR CONFIRMAR: antes del 20/06, es la carátula de 4 meses
    ocasion: 'El trend de TV Girl',
    tecnica: 'Digital · Ibis Paint',
    medidas: '4096 × 4096 px',
    descripcion:
      'Por el trend de TV Girl: dos pares de ojos en neón, uno rosa y otro azul, mirando fijo desde el negro.',
    etiquetas: ['tv girl', 'trend', 'neón'],
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

  // --- Webs: fecha = creación del repositorio en GitHub ---------------------
  {
    id: '4skate',
    titulo: '4 meses',
    subtitulo: 'Cápsula del tiempo interactiva',
    tipo: 'web',
    fecha: '2026-06-20',
    ocasion: 'Geiversario de 4 meses',
    tecnica: 'HTML, CSS y JavaScript',
    medidas: 'WinGei 98',
    descripcion:
      'Por nuestro geiversario de 4 meses: una amistad que se estaba volviendo algo más, quizá. Un escritorio de Windows 98 que arranca con «cargando 4 meses» y guarda recuerdos en sus ventanas; hasta trae reproductor de CD, con Miradas de carátula.',
    etiquetas: ['retro', 'cápsula del tiempo', 'música'],
    medios: {
      imagen: 'archivo/4skate/portada.jpg',
      url: 'https://nakusuo.github.io/4Skate/',
    },
  },
  {
    id: '5555',
    titulo: 'The Way I See You',
    subtitulo: 'Escenario interactivo',
    tipo: 'web',
    fecha: '2026-07-11',
    ocasion: 'El 5.º mes',
    tecnica: 'HTML, CSS y JavaScript',
    descripcion:
      'Solías tener dudas, así que decidí regalarte esto por el quinto mes. «Every little thing here has a story to tell»: un lugar para recorrer donde cada cosita guarda algo que pienso de ti.',
    etiquetas: ['exploración', 'pensamientos'],
    medios: {
      imagen: 'archivo/5555/portada.jpg',
      url: 'https://nakusuo.github.io/5555/',
    },
  },
  {
    id: '5minutos',
    titulo: 'Borrow My Eyes',
    subtitulo: 'Página web interactiva',
    tipo: 'web',
    fecha: '2026-07-29',
    ocasion: 'Para los días difíciles',
    tecnica: 'HTML, CSS y JavaScript',
    medidas: '6 rincones',
    descripcion:
      'Tus crisis empezaron a ser muy seguidas y te sentía llena de dudas y miedos. Quería que supieras que siempre estoy ahí. «¿Me prestas cinco minutos de tu cabeza? Yo mientras te presto la mía». Un bosque con rincones: lo que veo cuando dudas, cuando creas, cuando estás lejos, cuando estás cansada…',
    etiquetas: ['bosque', 'lo que veo', 'siempre estoy'],
    medios: {
      imagen: 'archivo/5minutos/portada.jpg',
      url: 'https://nakusuo.github.io/5minutos/',
    },
  },
  {
    id: 'te-hice-algo',
    titulo: 'Te hice algo',
    subtitulo: 'Página web interactiva',
    tipo: 'web',
    fecha: '2026-09-08',
    tecnica: 'HTML, CSS y JavaScript',
    medidas: '6 recorridos',
    descripcion:
      'Un ramo de flores que se abre en caminos: una carta, un jardín de recuerdos, una cajita con lo que no sé decirte, un viaje lejos de todo, lo que veo y una última cosa, la que no cabía en ninguna cajita.',
    etiquetas: ['flores', 'carta', 'recuerdos'],
    medios: {
      imagen: 'archivo/te-hice-algo/portada.jpg',
      url: 'https://nakusuo.github.io/MxG/',
    },
  },
]
