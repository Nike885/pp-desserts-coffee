import { Link } from 'react-router-dom'

export default function Home(){
  // Replace these with real links if the shop gives them
  const googleMapsLink = "https://www.google.com/maps/search/?api=1&query=P%26P+Desserts+and+Coffee"

  return (
    <div id="top">
      <section className="hero-video-section">
        <div className="video-background">
          <video autoPlay loop muted playsInline>
            <source src="/background-video.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="kicker">✨ Fresh desserts • Coffee • Crepes • Cakes</div>
          <h1>P&P Desserts & Coffee</h1>
          <p className="lead">
            A cozy spot for coffee, waffles & crepes, desserts, cakes, cheesecakes, smoothies, and more.
            Browse the full menu and visit us today.
          </p>
          <div className="hero-actions">
            <Link className="btn primary" to="/menu">View Menu</Link>
            <a className="btn secondary" href={googleMapsLink} target="_blank" rel="noreferrer">Get Directions</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="card hero-info-grid">
          <div className="card promo">
            <h3>Popular right now</h3>
            <p>Nutella Crepe • Tiramisu Latte • Cheesecake • Smoothies • Italian Sodas</p>
          </div>
          <div className="card promo">
            <h3>Catering & whole cakes</h3>
            <p>Whole cakes and cheesecakes available — ask about fillings and custom options.</p>
            <div style={{marginTop:12}}>
              <Link className="btn" to="/contact">Request catering</Link>
            </div>
          </div>
          <div className="card promo">
            <h3>Hours</h3>
            <p>Add business hours here once confirmed (Google listing sometimes changes).</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>What you’ll find</h2>
          <span>Made for mobile + desktop</span>
        </div>

        <div className="grid3">
          <div className="card feature">
            <div className="icon">☕</div>
            <h3>Coffee & espresso</h3>
            <p>Hot + iced drinks including lattes, matcha, chai, dalgona, and affogato.</p>
          </div>

          <div className="card feature">
            <div className="icon">🧇</div>
            <h3>Waffles & crepes</h3>
            <p>Sweet options like vanilla, cinnamon, chocolate, Nutella, and Oreo.</p>
          </div>

          <div className="card feature">
            <div className="icon">🍰</div>
            <h3>Desserts & cakes</h3>
            <p>Slices, whole cakes, cheesecakes, entremet, and brownie options.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="card" style={{padding:18}}>
          <div className="section-title" style={{marginBottom:8}}>
            <h2>Location</h2>
            <span>Embed a real map once address is confirmed</span>
          </div>
          <div className="hr" />
          <div style={{display:'grid', gap:12}}>
            <p style={{margin:0, color:'rgba(255,255,255,0.72)'}}>
              Replace this section with the shop’s exact address, phone number, and social links.
            </p>
            <div style={{display:'flex', gap:10, flexWrap:'wrap'}}>
              <a className="btn" href={googleMapsLink} target="_blank" rel="noreferrer">Open in Google Maps</a>
              <Link className="btn" to="/menu">See full menu</Link>
              <Link className="btn" to="/contact">Contact / Order</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
