import React from 'react'
import { Link } from 'react-router-dom'
import AnimatedStat from '../components/AnimatedStat.jsx'
import ProductCard from '../components/ProductCard.jsx'
import products from '../data/products.js'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <span className="hero-eyebrow">India · Est. 1999 · Export House</span>
          <h1 className="font-display">Securing the global tobacco supply chain with compliant, high-grade Indian tobacco.</h1>
          <p className="lede">Reliable sourcing, technical consistency and export-ready quality, built for international buyers and regional distribution partners who cannot afford supply disruption.</p>
          <div className="hero-ctas">
            <Link to="/products" className="btn btn-primary">Explore Product Portfolio</Link>
            <Link to="/onboarding" className="btn btn-outline-light">Become an Approved Importer</Link>
          </div>
          <div className="hero-trust">
            <span>Export Ready</span>
            <span>Quality Controlled</span>
            <span>Compliance Focused</span>
            <span>Global Supply</span>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div className="stats-row">
            <AnimatedStat target={26} label="Years supplying international markets" />
            <AnimatedStat target={34} label="Countries with active import relationships" />
            <AnimatedStat target={18} suffix=",000 MT" label="Annual processing & supply capacity" />
            <AnimatedStat target={100} suffix="%" label="Consignments released with full export documentation" />
          </div>
        </div>
      </section>

      <section>
        <div className="container split">
          <div className="split-media">
            <img src="/assets/tobacco-leafs.jpg" alt="Tobacco leaf processing and grading facility" loading="lazy" />
          </div>
          <div>
            <span className="eyebrow">Why partner with us</span>
            <h2 className="font-display display-lg">Built for the demands of global procurement.</h2>
            <p>Procurement teams don't need another vendor promising the best price. They need a supplier whose specifications hold consignment after consignment, whose paperwork clears customs the first time, and whose lines answer when a shipment schedule changes.</p>
            <ul className="check-list">
              <li>Consistent sourcing across multiple growing regions and harvest cycles</li>
              <li>Fixed technical specifications, verified batch by batch</li>
              <li>In-house laboratory testing for nicotine, moisture and residue</li>
              <li>Full export documentation prepared ahead of shipment</li>
              <li>Scalable supply from smallholder volumes to full container loads</li>
            </ul>
            <Link to="/about" className="btn-ghost">Explore Our Capabilities</Link>
          </div>
        </div>
      </section>

      <section className="section-ivory-dim">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Product portfolio</span>
            <h2 className="font-display display-lg">Six categories, one standard of consistency.</h2>
          </div>
        </div>
        <div className="container">
          <div className="product-grid">
            {products.map((p) => <ProductCard product={p} key={p.slug} />)}
          </div>
        </div>
      </section>

      <section>
        <div className="container split">
          <div>
            <span className="eyebrow">Quality you can verify</span>
            <h2 className="font-display display-lg">Every batch tested before it earns a shipment number.</h2>
            <p>Our in-house laboratory screens each production batch for nicotine content, moisture, sugar ratio and pesticide residue before it is approved for export. Certificates of analysis travel with every consignment.</p>
            <Link to="/quality" className="btn-ghost">See Our Testing Process</Link>
          </div>
          <div className="split-media">
            <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop" alt="Laboratory technician testing tobacco samples" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Ready to bring a reliable supplier into your procurement pipeline?</h2>
          <div className="btn-row">
            <Link to="/onboarding" className="btn btn-brown">Become an Approved Importer</Link>
            <Link to="/contact" className="btn btn-outline-light">Contact Export Team</Link>
          </div>
        </div>
      </section>
    </>
  )
}
