import { Link } from 'react-router-dom'
export default function NotFound(){
  return (
    <section className="section">
      <div className="card" style={{padding:18}}>
        <h2 style={{marginTop:0}}>Page not found</h2>
        <p style={{color:'rgba(255,255,255,0.72)'}}>Go back home or check the menu.</p>
        <div style={{display:'flex', gap:10, flexWrap:'wrap'}}>
          <Link className="btn primary" to="/">Home</Link>
          <Link className="btn" to="/menu">Menu</Link>
        </div>
      </div>
    </section>
  )
}
