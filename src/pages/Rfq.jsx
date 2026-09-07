import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRfq } from '../context/RfqContext.jsx'

export default function Rfq() {
  const { items, removeItem, clear } = useRfq()
  const [submitted, setSubmitted] = useState(false)
  const [annualVolume, setAnnualVolume] = useState('')
  const [destination, setDestination] = useState('')
  const [notes, setNotes] = useState('')

  function handleSubmit() {
    setSubmitted(true)
    clear()
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / Request for Quote</div>
          <span className="eyebrow">RFQ</span>
          <h1>Your Request for Quote.</h1>
          <p>Add estimated quantities and packaging preferences for each product, then submit as a single specification inquiry to our export team.</p>
        </div>
      </section>

      <section>
        <div className="container">
          {submitted ? (
            <div className="rfq-empty">
              <h3 style={{ color: 'var(--charcoal)', fontSize: 20, marginBottom: 10 }}>RFQ submitted.</h3>
              <p>Our export team will review your specification and respond with a formal quotation.</p>
              <Link to="/products" className="btn-ghost">Browse More Products</Link>
            </div>
          ) : (
            <div className="rfq-layout">
              <div>
                <h2 style={{ fontSize: 20, marginBottom: 20 }}>Selected products</h2>
                {items.length === 0 ? (
                  <div className="rfq-empty">
                    <p>Your RFQ is empty. Add products from the portfolio to get started.</p>
                    <Link to="/products" className="btn-ghost">Browse Products</Link>
                  </div>
                ) : (
                  <div>
                    {items.map((item) => (
                      <div className="rfq-item" key={item.rfqId}>
                        <div className="thumb"><img src={item.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                        <div className="meta">
                          <h4>{item.name}</h4>
                          <div className="fields">
                            <div className="field" style={{ marginBottom: 0 }}><label style={{ fontSize: 11.5 }}>Estimated quantity</label><input type="text" placeholder="e.g. 8 MT" /></div>
                            <div className="field" style={{ marginBottom: 0 }}><label style={{ fontSize: 11.5 }}>Packaging</label><input type="text" placeholder={item.packagingHint || 'Specify packaging'} /></div>
                          </div>
                        </div>
                        <button className="rfq-remove" onClick={() => removeItem(item.rfqId)}>Remove</button>
                      </div>
                    ))}
                  </div>
                )}
                <Link to="/products" className="btn-ghost" style={{ marginTop: 8, display: 'inline-block' }}>Add More Products</Link>

                <div className="field" style={{ marginTop: 36 }}>
                  <label htmlFor="rfq-notes">Additional notes</label>
                  <textarea id="rfq-notes" placeholder="Blend preferences, delivery timeline, or anything else our export team should know." value={notes} onChange={(e) => setNotes(e.target.value)} />
                </div>
              </div>

              <div className="rfq-summary">
                <h3>RFQ Summary</h3>
                <div className="row"><span>Selected products</span><span>{items.length}</span></div>
                <div className="field" style={{ marginTop: 16 }}>
                  <label style={{ color: 'rgba(246,241,231,0.85)' }} htmlFor="rfq-annual">Estimated annual volume</label>
                  <input type="text" id="rfq-annual" placeholder="e.g. 60 MT / year" value={annualVolume} onChange={(e) => setAnnualVolume(e.target.value)} />
                </div>
                <div className="field">
                  <label style={{ color: 'rgba(246,241,231,0.85)' }} htmlFor="rfq-destination">Destination country</label>
                  <input type="text" id="rfq-destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
                </div>
                <button
                  className="btn btn-brown btn-block"
                  style={{ marginTop: 8 }}
                  disabled={items.length === 0}
                  onClick={handleSubmit}
                >
                  Submit RFQ
                </button>
                <p style={{ fontSize: 12, color: 'rgba(246,241,231,0.5)', marginTop: 14, marginBottom: 0 }}>
                  No payment or checkout is processed here. Our export team will respond with a formal quotation.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
