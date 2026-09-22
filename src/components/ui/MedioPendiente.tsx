interface Props {
  texto?: string
  className?: string
}

/* Lo que se ve cuando un objeto todavía no tiene su archivo en /public, o la
   ruta está mal: una caja rayada como de «pendiente de digitalizar», en vez
   del icono de imagen rota del navegador. */
export function MedioPendiente({ texto = 'Pendiente de digitalizar', className = '' }: Props) {
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-tinta-suave/50 bg-[repeating-linear-gradient(135deg,transparent_0_10px,rgb(26_26_26/0.05)_10px_11px)] ${className}`}
    >
      <span className="rotulo bg-papel-claro px-2 py-1 text-tinta-suave">{texto}</span>
    </div>
  )
}
