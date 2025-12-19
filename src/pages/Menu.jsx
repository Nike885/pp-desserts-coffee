import { useMemo, useState } from 'react'
import { MENU } from '../data/menu.js'
import MenuSection from '../components/MenuSection.jsx'

const CATEGORIES = [
  { key: 'wafflesCrepes', label: 'Waffles & Crepes' },
  { key: 'croissantPaniniBagel', label: 'Croissant / Panini / Bagel' },
  { key: 'arepa', label: 'Arepa' },
  { key: 'hotDrinks', label: 'Hot Drinks' },
  { key: 'icedDrinks', label: 'Iced Drinks' },
  { key: 'desserts', label: 'Desserts' },
  { key: 'italianSodas', label: 'Italian Sodas' },
  { key: 'smoothies', label: 'Smoothies' },
  { key: 'cakes', label: 'Cakes' },
  { key: 'cheesecakes', label: 'Cheesecakes' },
  { key: 'entremet', label: 'Entremet' },
  { key: 'brownie', label: 'Brownie' },
]

export default function Menu(){
  const [active, setActive] = useState('wafflesCrepes')

  const activeLabel = useMemo(() => {
    const found = CATEGORIES.find(c => c.key === active)
    return found ? found.label : 'Menu'
  }, [active])

  const items = MENU[active] ?? []

  return (
    <section className="section">
      <div className="card menu-shell">
        <div className="menu-top">
          <div>
            <h1>Menu</h1>
            <p>Tap a category to view items and pricing.</p>
          </div>
        </div>

        <div className="tabs">
          {CATEGORIES.map(cat => (
            <button
              key={cat.key}
              className={'tab ' + (active === cat.key ? 'active' : '')}
              onClick={() => setActive(cat.key)}
              type="button"
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div id="preview">
        <MenuSection title={activeLabel} items={items} />
      </div>
    </section>
  )
}
