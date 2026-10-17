export default function Ticker({ items }) {
  // Se duplica la lista para que el desplazamiento sea continuo.
  const loop = [...items, ...items]
  return (
    <div className="ticker" aria-label={items.join('. ')}>
      <div className="ticker__track" aria-hidden="true">
        {loop.map((item, i) => (
          <span key={i} className="ticker__item">
            <span className="ticker__dot">✦</span> {item}
          </span>
        ))}
      </div>
    </div>
  )
}
