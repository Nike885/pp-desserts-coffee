import { NavLink } from 'react-router-dom'

export default function Header(){
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <div className="brand-badge">P&P</div>
          <div>
            <div style={{fontSize:14, fontWeight:900}}>P&P Desserts & Coffee</div>
            <div style={{fontSize:12, color:'rgba(255,255,255,0.60)'}}>Desserts • Coffee • Crepes</div>
          </div>
        </div>

        <div className="nav-right">
          <nav className="nav">
            <NavLink to="/" end className={({isActive}) => isActive ? 'active' : undefined}>Home</NavLink>
            <NavLink to="/menu" className={({isActive}) => isActive ? 'active' : undefined}>Menu</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : undefined}>Contact</NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}
