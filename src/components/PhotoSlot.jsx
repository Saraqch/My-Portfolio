// Muestra una foto si existe; si no, un espacio reservado con el mismo tamaño.
export default function PhotoSlot({ src, alt, label, className = '' }) {
  if (src) {
    return (
      <div className={`photo ${className}`}>
        <img src={`${import.meta.env.BASE_URL}${src}`} alt={alt} loading="lazy" />
      </div>
    )
  }
  return (
    <div className={`photo photo--empty ${className}`} role="img" aria-label={label}>
      <svg viewBox="0 0 24 24" width="32" height="32" aria-hidden="true">
        <path
          fill="currentColor"
          d="M9 3 7.2 5H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.2L15 3H9Zm3 5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
        />
      </svg>
      <span>{label}</span>
    </div>
  )
}
