# Pink Archive

Un archivo de museo de todo lo que le he hecho a mi persona favorita: webs,
dibujos, videos y cartas, catalogados como piezas de colección. Cada cosa
tiene su ficha con número de objeto, código de catálogo, datos técnicos y un
código de barras (escaneable, Code 39).

Cada tipo se exhibe en su propia carcasa:

| Tipo     | Se exhibe como                                       |
| -------- | ---------------------------------------------------- |
| `web`    | Disquete de 3.5" con etiqueta + vista previa y enlace |
| `video`  | Cinta VHS con el reproductor dentro                   |
| `dibujo` | Lámina enmarcada con paspartú (se amplía al pulsar)   |
| `carta`  | Hoja pautada con la transcripción                     |
| `otro`   | Lámina                                               |

## Arrancar

```bash
npm install
npm run dev      # http://localhost:5173
npm test         # vitest
npm run lint     # oxlint
npm run build    # tsc + vite build → dist/
```

## Añadir un objeto al archivo

1. Crea la carpeta `public/archivo/<id>/` y deja ahí sus archivos
   (`dibujo.png`, `video.mp4`, `portada.jpg`…).
2. Añade una entrada en [src/data/objetos.ts](src/data/objetos.ts):

```ts
{
  id: 'mi-nuevo-dibujo',            // va en la URL: /#/objeto/mi-nuevo-dibujo
  titulo: 'Mi nuevo dibujo',
  subtitulo: 'Ilustración digital',
  tipo: 'dibujo',                   // web | dibujo | video | carta | otro
  fecha: '2026-09-21',              // AAAA-MM-DD
  ocasion: 'Porque sí',             // opcional
  tecnica: 'Digital · Ibis Paint',
  medidas: '2048 × 2048 px',        // opcional: tamaño, duración…
  descripcion: 'Lo que es y por qué lo hice.',
  etiquetas: ['tú y yo'],           // opcional
  medios: {
    imagen: 'archivo/mi-nuevo-dibujo/dibujo.png',
    // video: 'archivo/.../video.mp4',
    // url: 'https://…',            // para webs
    // galeria: ['archivo/.../boceto.png'],
  },
  // texto: 'La carta, o una nota larga sobre el objeto.',
}
```

No hace falta numerar nada: el catálogo se ordena por fecha y cada objeto
recibe su número (`001` es el más antiguo), su código (`PA-001`) y su número de
documento (`PA.001.2026`). Si falta un archivo, la ficha muestra «pendiente de
digitalizar» en lugar de romperse.

El nombre del archivo, la dedicatoria y para quién es están en
[src/config/archivo.ts](src/config/archivo.ts).

> Los videos pesados (> 50 MB) conviene comprimirlos antes o subirlos fuera
> (p. ej. a un release de GitHub) y poner su URL absoluta en `medios.video`.

## Estructura

```
src/
├── components/
│   ├── layout/        Marco, pie de documento, scroll al cambiar de ruta
│   ├── objetos/       Tarjeta, filtros, etiqueta de catálogo, vista web
│   │   └── carcasas/  Disquete, Cinta, Lámina, Hoja
│   └── ui/            Piezas del cartel: Campo, Regla, CajaSello, CódigoBarras…
├── config/            Datos generales del archivo y nombres de cada tipo
├── data/              objetos.ts: EL archivo
├── hooks/             useTituloDocumento
├── lib/               catálogo (numeración), Code 39, formato de fechas
├── pages/             Índice, Ficha, Cronología, No encontrado
├── routes/            Rutas (HashRouter, por GitHub Pages)
├── test/              Tests de vitest
└── types/             Modelo de objeto
```

## Flujo de trabajo

Git flow:

- `main` — lo publicado. Cada push despliega en GitHub Pages
  ([.github/workflows/pages.yml](.github/workflows/pages.yml)).
- `develop` — integración.
- `feat/*`, `fix/*`, `chore/*`, `docs/*` — salen de `develop` y vuelven con
  `git merge --no-ff`.
- Release: `develop` → `main` con `--no-ff` y etiqueta `vX.Y.Z`.

Para añadir objetos nuevos basta una rama `feat/objeto-<id>`.

Commits en español con [Conventional Commits](https://www.conventionalcommits.org/es/).

Para activar el despliegue la primera vez: en GitHub, *Settings → Pages →
Source: GitHub Actions*.
