export default function Footer(){
  return (
    <footer className="footer">
      <div className="container" style={{display:'flex', justifyContent:'space-between', gap:12, flexWrap:'wrap'}}>
        <div>© {new Date().getFullYear()} P&P Desserts & Coffee</div>
        <div style={{display:'flex', gap:12}}>
          <a className="btn" href="#top">Back to top</a>
          <a className="btn" href="/contact">Order / Contact</a>
        </div>
      </div>
    </footer>
  )
}
