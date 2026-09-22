interface Props {
  className?: string
}

/* El globo del cartel original, pero con un corazón donde van los meridianos:
   la marca del archivo. Trazo con currentColor para heredar el rosa. */
export function Emblema({ className = '' }: Props) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={`h-10 w-10 fill-none stroke-current ${className}`}
      strokeWidth={1.8}
      aria-hidden
    >
      <circle cx="20" cy="20" r="17" />
      <path d="M3 20h34M20 3c-6 5-6 29 0 34M20 3c6 5 6 29 0 34" strokeWidth={1.2} />
      <path
        d="M20 29s-8-4.6-8-10.2A4.2 4.2 0 0 1 20 17a4.2 4.2 0 0 1 8 1.8C28 24.4 20 29 20 29z"
        className="fill-papel"
        strokeWidth={1.8}
      />
    </svg>
  )
}
