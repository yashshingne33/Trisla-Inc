import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useRfq } from '../context/RfqContext.jsx'
import { getProductBySlug } from '../data/products.js'
import NotFound from './NotFound.jsx'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem, isAdded } = useRfq()

  if (!product) return <NotFound />

  const added = isAdded(product.slug)

  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <Link to="/products">Products</Link> / {product.name}
          </div>
          <h1>{product.name}</h1>
          <p>{product.positioning}</p>
          <div className="hero-ctas" style={{ marginTop: 8 }}>
            <button
              className="rfq-add-btn"
              style={{ padding: '13px 24px', fontSize: '14.5px' }}
              onClick={() => addItem(product)}
            >
              {added ? 'Added' : 'Add to RFQ +'}
            </button>
            <a href="#tds" className="btn btn-outline-light">Request Technical Data Sheet</a>
          </div>
        </div>
      </section>

      <section>
        <div className="container split" style={{ alignItems: 'flex-start' }}>
          <div className="split-media" style={{ aspectRatio: '4/3' }}>
            <img src={product.image} alt={product.alt} loading="lazy" />
          </div>
          <div>
            <span className="eyebrow">Technical specifications</span>
            <h2 style={{ fontSize: 24, marginBottom: 22 }}>Specification sheet</h2>
            <div className="table-scroll">
              <table className="spec-table">
                <tbody>
                  {product.specs.map(([k, v]) => (
                    <tr key={k}><th>{k}</th><td>{v}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="section-ivory-dim">
        <div className="container">
          <span className="eyebrow">Product capabilities</span>
          <h2 style={{ fontSize: 26, marginBottom: 26 }}>What we can adjust to your specification.</h2>
          <ul className="check-list" style={{ maxWidth: 640 }}>
            {product.capabilities.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </section>

      <section id="tds">
        <div className="container text-center" style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 className="font-display display-lg">Need a custom specification?</h2>
          <p style={{ margin: '0 auto 30px' }}>Submit your required technical parameters and our export team will prepare a formal quotation, including a Technical Data Sheet for your review.</p>
          <button
            className="rfq-add-btn"
            style={{ padding: '14px 30px', fontSize: '15px' }}
            onClick={() => addItem(product)}
          >
            {added ? 'Added to RFQ' : 'Add Product to RFQ'}
          </button>
        </div>
      </section>
    </>
  )
}
