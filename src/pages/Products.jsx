import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import products from '../data/products.js'

export default function Products() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / Products</div>
          <span className="eyebrow">Product portfolio</span>
          <h1>Six categories. One technical standard.</h1>
          <p>Every listing here is a specification sheet, not a marketing pitch. Select products to build a Request for Quote, or open a listing for full technical detail.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="product-grid">
            {products.map((p) => <ProductCard product={p} key={p.slug} />)}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Need a specification we haven't listed?</h2>
          <div className="btn-row">
            <Link to="/rfq" className="btn btn-brown">Review Your RFQ</Link>
            <Link to="/contact" className="btn btn-outline-light">Talk to the Export Team</Link>
          </div>
        </div>
      </section>
    </>
  )
}
