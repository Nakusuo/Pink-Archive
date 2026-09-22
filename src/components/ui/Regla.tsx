interface Props {
  gruesa?: boolean
  className?: string
}

/** La línea horizontal que separa los bloques del cartel. */
export function Regla({ gruesa = false, className = '' }: Props) {
  return (
    <hr
      className={`border-0 bg-tinta ${gruesa ? 'h-[2px]' : 'h-px'} ${className}`}
    />
  )
}
