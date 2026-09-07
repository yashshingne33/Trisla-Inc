import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <span className="footer-logo">Trisla Inc.</span>
            <p>An India-based export house supplying compliant, laboratory-tested tobacco and nicotine products to licensed importers and distributors across 30+ international markets.</p>
          </div>
          <div>
            <h5>COMPANY</h5>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/about#infrastructure">Infrastructure</Link></li>
              <li><Link to="/quality">Quality &amp; Compliance</Link></li>
              <li><Link to="/exports">Global Footprint</Link></li>
            </ul>
          </div>
          <div>
            <h5>PRODUCTS</h5>
            <ul>
              <li><Link to="/products/smoking-mixture">Smoking Mixture</Link></li>
              <li><Link to="/products/beedi">Beedi</Link></li>
              <li><Link to="/products/hookah-tobacco">Hookah Tobacco</Link></li>
              <li><Link to="/products/tobacco-extract">Tobacco Extract</Link></li>
              <li><Link to="/products/chewing-tobacco">Chewing Tobacco</Link></li>
              <li><Link to="/products/nicotine-products">Nicotine Products</Link></li>
            </ul>
          </div>
          <div>
            <h5>EXPORT</h5>
            <ul>
              <li><Link to="/rfq">Request a Quote</Link></li>
              <li><Link to="/onboarding">Importer Onboarding</Link></li>
              <li><Link to="/quality">Technical Data Sheets</Link></li>
              <li><Link to="/exports">Export Documentation</Link></li>
            </ul>
          </div>
          <div>
            <h5>CONTACT</h5>
            <ul>
              <li><a href="mailto:export@meridianleaf.example">export@meridianleaf.example</a></li>
              <li><a href="tel:+912233445566">+91 22 3344 5566</a></li>
              <li>Guntur, Andhra Pradesh, India</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Trisla Inc. All rights reserved.</span>
          <span className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Cookie Policy</a>
            <Link to="/quality">Regulatory Information</Link>
          </span>
        </div>
      </div>
      <div className="footer-compliance">FOR EXPORT PURPOSES ONLY. WE DO NOT SELL TO END CONSUMERS OR MINORS.</div>
    </footer>
  )
}
