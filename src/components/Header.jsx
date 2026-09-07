import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
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

  // If the viewport is widened past the mobile breakpoint while the menu
  // is open (tablet rotation, resizable browser window), close it so the
  // fixed overlay and body scroll-lock don't get stuck on.
  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 900) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  function close() { setOpen(false) }

  const navPanel = (
    <ul className={`nav-links${open ? ' is-open' : ''}`}>
      {NAV_ITEMS.map((item) => (
        <li key={item.to}>
          <NavLink
            to={item.to}
            className={({ isActive }) => (isActive ? 'current' : undefined)}
            onClick={close}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
      <li className="nav-actions-mobile">
        <Link to="/rfq" className="btn btn-outline-dark" onClick={close}>
          RFQ ({items.length})
        </Link>
        <Link to="/onboarding" className="btn btn-primary" onClick={close}>
          Request a Quote
        </Link>
      </li>
    </ul>
  )

  return (
    <>
      <div className="compliance-strip">For Export Purposes Only — We Do Not Sell to End Consumers or Minors</div>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="container header-row">
          <Link to="/" className="logo" onClick={close}>
            <span className="logo-mark"></span>Trisla Inc. <small>Exports</small>
          </Link>

          {/* Desktop nav renders inline as before */}
          <nav className="nav-desktop">{navPanel}</nav>

          <div className="header-actions">
            <Link to="/rfq" className="btn btn-outline-dark btn-sm">RFQ ({items.length})</Link>
            <Link to="/onboarding" className="btn btn-primary btn-sm">Request a Quote</Link>
            <button
              className={`nav-toggle${open ? ' is-open' : ''}`}
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav is portaled to <body> so .site-header's backdrop-filter
          can never turn it into the containing block for this fixed panel. */}
      {createPortal(
        <div className="nav-mobile-portal">{navPanel}</div>,
        document.body
      )}
    </>
  )
}