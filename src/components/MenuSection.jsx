export default function MenuSection({ title, items }){
  return (
    <div className="card menu-shell" style={{marginTop: 14}}>
      <div className="menu-top">
        <div>
          <h2 style={{margin:0}}>{title}</h2>
          <p style={{margin:'6px 0 0', color:'rgba(255,255,255,0.70)'}}>Prices shown as listed. Ask in-store for availability.</p>
        </div>
      </div>

      <div className="menu-grid">
        {items.map((it) => (
          <div key={it.name} className="card menu-item" style={{boxShadow:'none'}}>
            <div>
              <h4>{it.name}</h4>
              {it.desc ? <small>{it.desc}</small> : null}
            </div>
            <div className="price">${it.price.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
