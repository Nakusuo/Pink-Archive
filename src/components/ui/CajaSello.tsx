interface Props {
  lineas: string[]
  className?: string
}

/** La caja apilada de la esquina del cartel (PA / ARCHIVO / OBJETO). */
export function CajaSello({ lineas, className = '' }: Props) {
  return (
    <div className={`border-[1.5px] border-tinta ${className}`} aria-hidden>
      {lineas.map((linea, i) => (
        <div
          key={linea}
          className={`px-3 py-1 text-sm font-semibold tracking-wide uppercase ${
            i > 0 ? 'border-t-[1.5px] border-tinta' : ''
          }`}
        >
          {linea}
        </div>
      ))}
    </div>
  )
}
