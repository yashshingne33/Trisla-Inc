import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section>
      <div className="container text-center" style={{ padding: '100px 20px' }}>
        <h1 style={{ fontSize: 32, marginBottom: 14 }}>Page not found.</h1>
        <p style={{ margin: '0 auto 26px' }}>The page you're looking for doesn't exist or may have moved.</p>
        <Link to="/" className="btn btn-primary">Return to Home</Link>
      </div>
    </section>
  )
}
