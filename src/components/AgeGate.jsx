import React, { useEffect, useState } from 'react'
import { getCookie, setCookie } from '../utils/cookie.js'

export default function AgeGate() {
  const [hidden, setHidden] = useState(true)
  const [country, setCountry] = useState('')
  const [checked, setChecked] = useState(false)
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    const verified = getCookie('mle_age_verified')
    if (verified === 'yes') {
      setHidden(true)
      document.body.classList.remove('gate-active')
    } else {
      setHidden(false)
      document.body.classList.add('gate-active')
    }
  }, [])

  function handleConfirm() {
    if (!country || !checked) {
      setShowError(true)
      return
    }
    setShowError(false)
    setCookie('mle_age_verified', 'yes', 30)
    setCookie('mle_country', country, 30)
    setHidden(true)
    document.body.classList.remove('gate-active')
  }

  function handleExit(e) {
    e.preventDefault()
    window.location.href = 'https://www.google.com'
  }

  return (
    <div className={`age-gate${hidden ? ' is-hidden' : ''}`} id="age-gate">
      <div className="age-gate-panel">
        <div className="logo-mark-lg"></div>
        <h1>Responsible Access to Our Export Portfolio</h1>
        <p>This site contains technical information about tobacco and nicotine products intended solely for licensed importers, distributors and procurement professionals. Access is restricted according to the laws of your country of residence.</p>
        <div className="field">
          <label htmlFor="age-country">Country / region</label>
          <select id="age-country" value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="">Select your country</option>
            <option>India</option>
            <option>United Arab Emirates</option>
            <option>Germany</option>
            <option>United Kingdom</option>
            <option>Nigeria</option>
            <option>Indonesia</option>
            <option>United States</option>
            <option>Other</option>
          </select>
        </div>
        <div className="checkbox-row">
          <input type="checkbox" id="age-check" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
          <label htmlFor="age-check">I confirm that I am of legal age to view tobacco-related trade information in my country, and that I am accessing this site for legitimate business purposes.</label>
        </div>
        {showError && (
          <p style={{ color: '#E4B96B', fontSize: '13px', marginTop: '14px' }}>
            Please select your country and confirm your eligibility to continue.
          </p>
        )}
        <div className="age-gate-actions">
          <button className="btn btn-brown btn-block" onClick={handleConfirm}>I Am of Legal Age to View This Website</button>
          <a href="#" onClick={handleExit} className="btn-ghost" style={{ color: 'rgba(246,241,231,0.6)', textAlign: 'center' }}>Exit Website</a>
        </div>
        <p className="age-gate-note">Meridian Leaf Exports Pvt. Ltd. supplies tobacco and nicotine products to licensed importers only, for export purposes. This site does not sell to consumers or minors under any circumstance.</p>
      </div>
    </div>
  )
}
