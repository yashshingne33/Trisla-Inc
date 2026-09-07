import React from 'react'
import { Link } from 'react-router-dom'

export default function Exports() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / Global Exports</div>
          <span className="eyebrow">Export logistics</span>
          <h1>From Indian origins to global markets.</h1>
          <p>Consignments move through three major Indian ports to distribution hubs across the Middle East, Africa, Europe and Southeast Asia, backed by full customs and phytosanitary documentation.</p>

          <div className="map-panel">
            <svg viewBox="0 0 900 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Export route map from Indian ports to global regions">
              <path className="route-line" d="M 470,190 C 400,150 320,120 230,140"></path>
              <path className="route-line" d="M 470,190 C 420,230 380,270 320,300"></path>
              <path className="route-line" d="M 470,190 C 560,150 640,110 720,90"></path>
              <path className="route-line" d="M 470,190 C 560,230 640,260 700,290"></path>
              <path className="route-line" d="M 470,190 C 540,190 610,195 660,200"></path>
              <circle className="map-dot origin" cx="470" cy="190" r="5"></circle>
              <text className="map-label" x="480" y="186">JNPT / Chennai / Vizag</text>
              <circle className="map-dot" cx="230" cy="140" r="4"></circle>
              <text className="map-label" x="180" y="128">Europe</text>
              <circle className="map-dot" cx="320" cy="300" r="4"></circle>
              <text className="map-label" x="270" y="316">Africa</text>
              <circle className="map-dot" cx="720" cy="90" r="4"></circle>
              <text className="map-label" x="700" y="78">Southeast Asia</text>
              <circle className="map-dot" cx="700" cy="290" r="4"></circle>
              <text className="map-label" x="640" y="306">Oceania</text>
              <circle className="map-dot" cx="660" cy="200" r="4"></circle>
              <text className="map-label" x="600" y="188">Middle East</text>
            </svg>
          </div>

          <div className="port-list">
            <div className="port-card"><h4>JNPT, Maharashtra</h4><p>Primary container gateway for west-bound and European routes.</p></div>
            <div className="port-card"><h4>Chennai, Tamil Nadu</h4><p>Principal outlet for Southeast Asian and Oceania consignments.</p></div>
            <div className="port-card"><h4>Visakhapatnam, Andhra Pradesh</h4><p>Closest deep-water port to our primary processing facilities.</p></div>
          </div>
        </div>
      </section>

      <section className="section-ivory-dim">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Export process</span>
            <h2 className="font-display display-lg">Eight checkpoints between inquiry and delivery.</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item"><div className="step-index">STEP 01</div><h4>Buyer Inquiry</h4><p>Initial contact through our RFQ system or export team.</p></div>
            <div className="timeline-item"><div className="step-index">STEP 02</div><h4>KYC &amp; Importer Verification</h4><p>Company registration and import license reviewed before quoting.</p></div>
            <div className="timeline-item"><div className="step-index">STEP 03</div><h4>Technical Specification Review</h4><p>Buyer requirements matched against available product specifications.</p></div>
            <div className="timeline-item"><div className="step-index">STEP 04</div><h4>Sample / TDS Approval</h4><p>Samples and Technical Data Sheets issued for buyer sign-off.</p></div>
            <div className="timeline-item"><div className="step-index">STEP 05</div><h4>Commercial Agreement</h4><p>Pricing, Incoterms and volume commitments formalized.</p></div>
            <div className="timeline-item"><div className="step-index">STEP 06</div><h4>Production &amp; Quality Control</h4><p>Batch production run and laboratory testing against agreed specification.</p></div>
            <div className="timeline-item"><div className="step-index">STEP 07</div><h4>Export Documentation</h4><p>Certificates of analysis, phytosanitary and customs paperwork prepared.</p></div>
            <div className="timeline-item"><div className="step-index">STEP 08</div><h4>Shipment &amp; Delivery</h4><p>Consignment released to carrier with tracking shared through to destination port.</p></div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Start the onboarding process for your import license.</h2>
          <div className="btn-row">
            <Link to="/onboarding" className="btn btn-brown">Become an Approved Importer</Link>
            <Link to="/contact" className="btn btn-outline-light">Contact Export Team</Link>
          </div>
        </div>
      </section>
    </>
  )
}
