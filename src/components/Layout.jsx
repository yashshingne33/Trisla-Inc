import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import AgeGate from './AgeGate.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <AgeGate />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
