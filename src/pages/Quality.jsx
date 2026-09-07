import React from 'react'
import { Link } from 'react-router-dom'

export default function Quality() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / Quality &amp; Compliance</div>
          <span className="eyebrow">Quality assurance</span>
          <h1>Quality you can verify.</h1>
          <p>Every production batch passes through systematic laboratory testing, and every consignment travels with the documentation and traceability records to prove it.</p>
        </div>
      </section>

      <section>
        <div className="container split" style={{ alignItems: 'flex-start', gridTemplateColumns: '0.9fr 1.1fr' }}>
          <div>
            <span className="eyebrow">Certifications</span>
            <h2 style={{ fontSize: 24, marginBottom: 24 }}>Recognized standards we hold.</h2>
            <div className="cert-list">
              <div className="cert-item"><div className="mark">ISO</div><div><h4>ISO 9001:2015</h4><p>Quality management systems, certified &amp; audited annually.</p></div></div>
              <div className="cert-item"><div className="mark">GMP</div><div><h4>Good Manufacturing Practice</h4><p>Processing and packaging facilities operate to GMP standard.</p></div></div>
              <div className="cert-item"><div className="mark">TB</div><div><h4>Tobacco Board Registration</h4><p>Registered exporter under the Tobacco Board of India.</p></div></div>
              <div className="cert-item"><div className="mark">LAB</div><div><h4>Laboratory Accreditation</h4><p>In-house lab operating to recognized testing protocols.</p></div></div>
              <div className="cert-item"><div className="mark">EXP</div><div><h4>Export Documentation Compliance</h4><p>Phytosanitary and customs documentation for 30+ destination markets.</p></div></div>
            </div>
          </div>
          <div>
            <span className="eyebrow">Laboratory testing</span>
            <h2 style={{ fontSize: 24, marginBottom: 24 }}>What we measure on every batch.</h2>
            <div className="lab-grid">
              <div className="lab-cell"><h4>Nicotine Analysis</h4><p>Quantified against buyer specification on every production batch.</p></div>
              <div className="lab-cell"><h4>Moisture Analysis</h4><p>Held within tolerance bands defined per product category.</p></div>
              <div className="lab-cell"><h4>Sugar Analysis</h4><p>Measured for products where sugar content affects flavor and combustion.</p></div>
              <div className="lab-cell"><h4>Pesticide Residue Testing</h4><p>Screened against destination-market maximum residue limits.</p></div>
              <div className="lab-cell"><h4>Contaminant Screening</h4><p>Checked for foreign matter and microbial contamination.</p></div>
              <div className="lab-cell"><h4>Batch Traceability</h4><p>Every lot linked back to grower region and processing date.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our process</span>
            <h2 className="font-display display-lg">From leaf to laboratory to export documentation.</h2>
          </div>
          <div className="process-flow">
            <div className="process-step"><div className="step-index">01</div><h4>Sourcing</h4><p>Leaf selected from verified grower regions to defined grade specifications.</p></div>
            <div className="process-step"><div className="step-index">02</div><h4>Processing</h4><p>Threshing, cutting and blending under controlled moisture conditions.</p></div>
            <div className="process-step"><div className="step-index">03</div><h4>Laboratory Testing</h4><p>Nicotine, moisture, sugar and residue analysis on the finished batch.</p></div>
            <div className="process-step"><div className="step-index">04</div><h4>Batch Approval</h4><p>Results checked against buyer specification before release.</p></div>
            <div className="process-step"><div className="step-index">05</div><h4>Export Documentation</h4><p>Certificates of analysis, phytosanitary and customs paperwork prepared.</p></div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Request a Technical Data Sheet for any product line.</h2>
          <div className="btn-row">
            <Link to="/products" className="btn btn-brown">Browse Product Portfolio</Link>
            <Link to="/contact" className="btn btn-outline-light">Contact Export Team</Link>
          </div>
        </div>
      </section>
    </>
  )
}
