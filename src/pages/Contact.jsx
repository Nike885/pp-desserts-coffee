export default function Contact(){
  // Replace with the real info
  const phone = "(000) 000-0000"
  const email = "hello@ppdessertscoffee.com"
  const instagram = "#"

  return (
    <section className="section">
      <div className="section-title">
        <h2>Contact & Catering</h2>
        <span>Fast way for customers to reach the shop</span>
      </div>

      <div className="contact-grid">
        <div className="card contact-card">
          <h3 style={{marginTop:0}}>Send a message</h3>
          <p style={{marginTop:0, color:'rgba(255,255,255,0.72)'}}>
            This is a front-end form (no backend). If you want it to send emails, we can connect Formspree or Netlify Forms.
          </p>

          <form onSubmit={(e) => { e.preventDefault(); alert('Preview only — connect a form service to send messages.'); }}>
            <label>Your Name</label>
            <input placeholder="Full name" required />

            <label>Phone or Email</label>
            <input placeholder="Best way to reach you" required />

            <label>What do you need?</label>
            <input placeholder="Catering, whole cake, question..." required />

            <label>Message</label>
            <textarea placeholder="Add details (date, quantity, flavors)..." required />

            <div style={{marginTop:14, display:'flex', gap:10, flexWrap:'wrap'}}>
              <button className="btn primary" type="submit">Send</button>
              <a className="btn" href="/menu">View Menu</a>
            </div>
          </form>
        </div>

        <div className="card contact-card">
          <h3 style={{marginTop:0}}>Shop info</h3>
          <div className="hr" />
          <p style={{margin:'0 0 10px', color:'rgba(255,255,255,0.72)'}}><b>Phone:</b> {phone}</p>
          <p style={{margin:'0 0 10px', color:'rgba(255,255,255,0.72)'}}><b>Email:</b> {email}</p>
          <p style={{margin:'0 0 10px', color:'rgba(255,255,255,0.72)'}}><b>Instagram:</b> <a className="btn" style={{padding:'6px 10px'}} href={instagram}>Open</a></p>

          <div className="hr" />
          <h4 style={{margin:'0 0 8px'}}>What customers usually ask</h4>
          <ul style={{margin:'0 0 0 18px', color:'rgba(255,255,255,0.70)', lineHeight:1.7}}>
            <li>Whole cakes and fillings</li>
            <li>Large dessert orders</li>
            <li>Custom pickup times</li>
            <li>Seasonal specials</li>
          </ul>

          <div style={{marginTop:14, display:'flex', gap:10, flexWrap:'wrap'}}>
            <a className="btn secondary" href="/menu">Preview Menu</a>
            <a className="btn" href="https://www.google.com/maps/search/?api=1&query=P%26P+Desserts+and+Coffee" target="_blank" rel="noreferrer">Directions</a>
          </div>
        </div>
      </div>
    </section>
  )
}
