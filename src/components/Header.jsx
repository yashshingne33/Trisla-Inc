import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useRfq } from '../context/RfqContext.jsx'

const NAV_ITEMS = [
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/quality', label: 'Quality & Compliance' },
  { to: '/exports', label: 'Global Exports' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { items } = useRfq()

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 8) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <div className="compliance-strip">For Export Purposes Only — We Do Not Sell to End Consumers or Minors</div>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="container header-row">
          <Link to="/" className="logo" onClick={() => setOpen(false)}>
            <span className="logo-mark"></span>Trisla Inc. <small>Exports</small>
          </Link>
          <nav>
            <ul className={`nav-links${open ? ' is-open' : ''}`}>
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => (isActive ? 'current' : undefined)}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header-actions">
            <Link to="/rfq" className="btn btn-outline-dark btn-sm">RFQ ({items.length})</Link>
            <Link to="/onboarding" className="btn btn-primary btn-sm">Request a Quote</Link>
            <button
              className="nav-toggle"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
