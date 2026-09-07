import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', company: '', country: '', phone: '', email: '',
    interest: 'Smoking Mixture', message: '',
  })

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / Contact</div>
          <span className="eyebrow">Contact</span>
          <h1>Talk to our export team.</h1>
          <p>For product inquiries, technical data requests or partnership discussions. Importer applications go through our dedicated onboarding process.</p>
        </div>
      </section>

      <section>
        <div className="container split" style={{ alignItems: 'flex-start' }}>
          <div>
            <h2 style={{ fontSize: 22, marginBottom: 6 }}>Global Export Office</h2>
            <p style={{ marginBottom: 0 }}>Correspondence and consignment coordination.</p>
            <div style={{ marginTop: 20 }}>
              <div className="contact-block"><div><h4>Address</h4><p>Trisla Inc.<br />Industrial Estate Road, Guntur, Andhra Pradesh 522001, India</p></div></div>
              <div className="contact-block"><div><h4>Phone</h4><p>+91 22 3344 5566</p></div></div>
              <div className="contact-block"><div><h4>Business Email</h4><p>export@trisla.example</p></div></div>
              <div className="contact-block"><div><h4>Export Department</h4><p>exports-desk@trisla.example</p></div></div>
              <div className="contact-block"><div><h4>Business Hours</h4><p>Mon &ndash; Sat, 09:00 &ndash; 18:00 IST</p></div></div>
            </div>
            <div className="map-static">Office location map</div>
          </div>

          <div>
            <h2 style={{ fontSize: 22, marginBottom: 20 }}>Start a conversation</h2>
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="field-row">
                  <div className="field"><label htmlFor="c-name">Name</label><input type="text" id="c-name" required value={form.name} onChange={update('name')} /></div>
                  <div className="field"><label htmlFor="c-company">Company</label><input type="text" id="c-company" required value={form.company} onChange={update('company')} /></div>
                </div>
                <div className="field-row">
                  <div className="field"><label htmlFor="c-country">Country</label><input type="text" id="c-country" required value={form.country} onChange={update('country')} /></div>
                  <div className="field"><label htmlFor="c-phone">Phone</label><input type="tel" id="c-phone" value={form.phone} onChange={update('phone')} /></div>
                </div>
                <div className="field"><label htmlFor="c-email">Business Email</label><input type="email" id="c-email" required value={form.email} onChange={update('email')} /></div>
                <div className="field">
                  <label htmlFor="c-interest">Product Interest</label>
                  <select id="c-interest" value={form.interest} onChange={update('interest')}>
                    <option>Smoking Mixture</option>
                    <option>Beedi</option>
                    <option>Hookah Tobacco</option>
                    <option>Tobacco Extract &amp; Absolute</option>
                    <option>Chewing Tobacco</option>
                    <option>Substitutes &amp; Nicotine Products</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="c-message">Message</label>
                  <textarea id="c-message" placeholder="Tell us about your volume, destination market and timeline." value={form.message} onChange={update('message')} />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Send Inquiry</button>
              </form>
            ) : (
              <div className="text-center" style={{ padding: '40px 20px' }}>
                <h3 style={{ fontSize: 19 }}>Inquiry received.</h3>
                <p>Our export team typically responds within one business day.</p>
              </div>
            )}

            <div style={{ marginTop: 36, paddingTop: 28, borderTop: '1px solid var(--line)' }}>
              <p style={{ fontWeight: 700, color: 'var(--charcoal)', marginBottom: 14 }}>Looking to import at commercial scale?</p>
              <Link to="/onboarding" className="btn-ghost">Become an Approved Importer</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
