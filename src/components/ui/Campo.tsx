import type { ReactNode } from 'react'

interface Props {
  etiqueta: string
  children: ReactNode
  className?: string
}

/** Par etiqueta rosa + valor, la unidad mínima de toda ficha. */
export function Campo({ etiqueta, children, className = '' }: Props) {
  return (
    <div className={className}>
      <dt className="rotulo text-rosa-tinta">{etiqueta}</dt>
      <dd className="mt-1 text-sm leading-snug font-medium">{children}</dd>
    </div>
  )
}
