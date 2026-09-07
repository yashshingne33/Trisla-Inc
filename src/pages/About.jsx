import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / About Us</div>
          <span className="eyebrow">About Meridian Leaf</span>
          <h1>Twenty-six years of moving Indian tobacco to global markets.</h1>
          <p>A corporate profile of our sourcing footprint, infrastructure and the compliance discipline we bring to every consignment.</p>
        </div>
      </section>

      <section>
        <div className="container split">
          <div>
            <span className="eyebrow">Our story</span>
            <h2 className="font-display display-lg">Started in the growing belt, built for the shipping lane.</h2>
            <p>Meridian Leaf was founded in Guntur, in the heart of Andhra Pradesh's tobacco-growing region, with a single conviction: that Indian tobacco could meet the technical demands of any international buyer if the sourcing, processing and documentation were treated as seriously as the crop itself.</p>
            <p>Over two and a half decades we have expanded from a single processing unit into an integrated export house spanning six product categories, an in-house testing laboratory, and direct relationships with growers across multiple states. What hasn't changed is the standard: every batch is specified, tested and documented before it is offered to a buyer.</p>
          </div>
          <div className="split-media">
            <img src="https://images.unsplash.com/photo-1595750448323-1b4e9dfb47f8?q=80&w=1200&auto=format&fit=crop" alt="Tobacco processing facility interior" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section-dark" id="infrastructure">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our infrastructure</span>
            <h2 className="font-display display-lg">What stands behind the specification sheet.</h2>
          </div>
          <div className="feature-grid">
            <div className="feature-cell"><h4>Processing Facilities</h4><p>Threshing, cutting and blending lines calibrated for consistent moisture and cut-width control across categories.</p></div>
            <div className="feature-cell"><h4>Warehousing</h4><p>Climate-controlled storage sized for both smallholder lots and full container consolidation.</p></div>
            <div className="feature-cell"><h4>Quality Laboratories</h4><p>In-house testing for nicotine, moisture, sugar content and pesticide residue on every production batch.</p></div>
            <div className="feature-cell"><h4>Packaging</h4><p>Moisture-barrier and bulk packaging lines configured to buyer specification and destination climate.</p></div>
            <div className="feature-cell"><h4>Export Operations</h4><p>A dedicated documentation team handling phytosanitary, customs and country-specific import paperwork.</p></div>
            <div className="feature-cell"><h4>Grower Network</h4><p>Direct sourcing relationships across Andhra Pradesh, Karnataka and Gujarat growing regions.</p></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center" style={{ maxWidth: 720, margin: '0 auto' }}>
          <span className="eyebrow">Our philosophy</span>
          <h2 className="font-display display-lg">Consistency. Compliance. Long-term partnerships.</h2>
          <p style={{ margin: '0 auto' }}>We don't compete for one-time orders. We build supply relationships that survive a difficult harvest year, a change in a destination country's regulations, or a shift in a buyer's own specification &mdash; because the underlying discipline doesn't change.</p>
        </div>
      </section>

      <section className="section-ivory-dim">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why global buyers choose us</span>
            <h2 className="font-display display-lg">Six reasons procurement teams stay with Meridian Leaf.</h2>
          </div>
          <div className="feature-grid" style={{ background: 'var(--line)', borderColor: 'var(--line)' }}>
            <div className="feature-cell" style={{ background: 'var(--white)' }}><h4>Reliable Sourcing</h4><p>Multi-region grower relationships that reduce single-harvest risk.</p></div>
            <div className="feature-cell" style={{ background: 'var(--white)' }}><h4>Technical Consistency</h4><p>Fixed specifications held across every production run.</p></div>
            <div className="feature-cell" style={{ background: 'var(--white)' }}><h4>Export Expertise</h4><p>In-house teams fluent in the paperwork of 30+ destination markets.</p></div>
            <div className="feature-cell" style={{ background: 'var(--white)' }}><h4>Quality Assurance</h4><p>Batch-level laboratory testing with certificates of analysis.</p></div>
            <div className="feature-cell" style={{ background: 'var(--white)' }}><h4>Documentation Support</h4><p>Phytosanitary, customs and licensing paperwork prepared ahead of shipment.</p></div>
            <div className="feature-cell" style={{ background: 'var(--white)' }}><h4>Scalable Supply</h4><p>From trial lots to full container programs, without renegotiating quality.</p></div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>See the standards behind every consignment.</h2>
          <div className="btn-row">
            <Link to="/quality" className="btn btn-brown">Quality &amp; Compliance</Link>
            <Link to="/onboarding" className="btn btn-outline-light">Become an Approved Importer</Link>
          </div>
        </div>
      </section>
    </>
  )
}
