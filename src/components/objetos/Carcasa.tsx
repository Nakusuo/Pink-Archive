import type { ObjetoArchivo } from '../../types/objeto'
import { Cinta } from './carcasas/Cinta'
import { Disquete } from './carcasas/Disquete'
import { Hoja } from './carcasas/Hoja'
import { Lamina } from './carcasas/Lamina'

interface Props {
  objeto: ObjetoArchivo
}

/** Elige cómo se exhibe cada objeto según su tipo. */
export function Carcasa({ objeto }: Props) {
  switch (objeto.tipo) {
    case 'web':
      return <Disquete objeto={objeto} />
    case 'video':
      return <Cinta objeto={objeto} />
    case 'carta':
      return <Hoja objeto={objeto} />
    case 'dibujo':
    case 'otro':
      return <Lamina objeto={objeto} />
  }
}
