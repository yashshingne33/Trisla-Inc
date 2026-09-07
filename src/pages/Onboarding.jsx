import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const STEP_LABELS = ['1. Company', '2. Regulatory', '3. Commercial', '4. Verification']

export default function Onboarding() {
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)
  const [files, setFiles] = useState({ license: '', registration: '', certifications: '', other: '' })

  function next() {
    if (step < STEP_LABELS.length - 1) setStep((s) => s + 1)
    else setDone(true)
  }
  function prev() {
    if (step > 0) setStep((s) => s - 1)
  }
  function onFile(key) {
    return (e) => {
      const f = e.target.files && e.target.files[0]
      setFiles((prev) => ({ ...prev, [key]: f ? f.name : '' }))
    }
  }

  if (done) {
    return (
      <section>
        <div className="container text-center" style={{ maxWidth: 720, padding: '60px 20px' }}>
          <h2 style={{ fontSize: 24, marginBottom: 12 }}>Application submitted.</h2>
          <p style={{ margin: '0 auto 26px' }}>Our compliance team will review your submission and respond within 2&ndash;3 business days with next steps.</p>
          <Link to="/" className="btn btn-outline-dark">Return to Home</Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / Secure Importer Onboarding</div>
          <span className="eyebrow">Become an approved importer</span>
          <h1>Become an Approved Importer.</h1>
          <p>Complete the following information to initiate our buyer verification process. Applications are reviewed by our compliance and export teams.</p>
        </div>
      </section>

      <section>
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="step-indicator">
            {STEP_LABELS.map((label, i) => (
              <div key={label} className={`step-pill${i === step ? ' active' : ''}${i < step ? ' done' : ''}`}>{label}</div>
            ))}
          </div>

          {step === 0 && (
            <div className="form-step active">
              <h3 style={{ fontSize: 19, marginBottom: 22 }}>Company information</h3>
              <div className="field-row">
                <div className="field"><label htmlFor="ob-company">Company name</label><input type="text" id="ob-company" /></div>
                <div className="field"><label htmlFor="ob-country">Country of registration</label><input type="text" id="ob-country" /></div>
              </div>
              <div className="field-row">
                <div className="field"><label htmlFor="ob-website">Company website</label><input type="url" id="ob-website" placeholder="https://" /></div>
                <div className="field">
                  <label htmlFor="ob-type">Business type</label>
                  <select id="ob-type">
                    <option>Importer</option>
                    <option>Regional Distributor</option>
                    <option>Procurement Agency</option>
                    <option>Manufacturer</option>
                  </select>
                </div>
              </div>
              <div className="field-row">
                <div className="field"><label htmlFor="ob-contact">Contact person</label><input type="text" id="ob-contact" /></div>
                <div className="field"><label htmlFor="ob-phone">Phone</label><input type="tel" id="ob-phone" /></div>
              </div>
              <div className="field"><label htmlFor="ob-email">Business email</label><input type="email" id="ob-email" /></div>
              <div className="form-nav"><span></span><button type="button" className="btn btn-primary" onClick={next}>Continue</button></div>
            </div>
          )}

          {step === 1 && (
            <div className="form-step active">
              <h3 style={{ fontSize: 19, marginBottom: 22 }}>Regulatory information</h3>
              <div className="field"><label htmlFor="ob-license">Import license number</label><input type="text" id="ob-license" /></div>
              <div className="field"><label htmlFor="ob-fda">IEC / FDA / equivalent license</label><input type="text" id="ob-fda" /></div>
              <div className="field">
                <label htmlFor="ob-tobacco-auth">Tobacco import authorization</label>
                <input type="text" id="ob-tobacco-auth" />
                <p className="field-hint">Reference number issued by your country's regulatory authority, where applicable.</p>
              </div>
              <div className="field"><label htmlFor="ob-registration">Country-specific registration</label><input type="text" id="ob-registration" /></div>
              <div className="form-nav">
                <button type="button" className="btn btn-outline-dark" onClick={prev}>Back</button>
                <button type="button" className="btn btn-primary" onClick={next}>Continue</button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="form-step active">
              <h3 style={{ fontSize: 19, marginBottom: 22 }}>Commercial requirements</h3>
              <div className="field">
                <label htmlFor="ob-products">Product categories</label>
                <select id="ob-products" multiple size={4}>
                  <option>Smoking Mixture</option>
                  <option>Beedi</option>
                  <option>Hookah Tobacco</option>
                  <option>Tobacco Extract &amp; Absolute</option>
                  <option>Chewing Tobacco</option>
                  <option>Substitutes &amp; Nicotine Products</option>
                </select>
                <p className="field-hint">Hold Ctrl / Cmd to select more than one.</p>
              </div>
              <div className="field-row">
                <div className="field"><label htmlFor="ob-volume">Estimated annual volume</label><input type="text" id="ob-volume" placeholder="e.g. 40 MT / year" /></div>
                <div className="field"><label htmlFor="ob-market">Target market</label><input type="text" id="ob-market" /></div>
              </div>
              <div className="field"><label htmlFor="ob-packaging">Packaging requirements</label><input type="text" id="ob-packaging" /></div>
              <div className="field"><label htmlFor="ob-specs">Required specifications</label><textarea id="ob-specs" placeholder="Moisture, nicotine, cut width or other technical parameters." /></div>
              <div className="form-nav">
                <button type="button" className="btn btn-outline-dark" onClick={prev}>Back</button>
                <button type="button" className="btn btn-primary" onClick={next}>Continue</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="form-step active">
              <h3 style={{ fontSize: 19, marginBottom: 22 }}>Verification documents</h3>
              {[
                ['license', 'Import license', 'PDF, JPG or PNG, up to 10MB'],
                ['registration', 'Company registration', 'PDF, JPG or PNG, up to 10MB'],
                ['certifications', 'Relevant certifications', 'PDF, JPG or PNG, up to 10MB'],
                ['other', 'Other supporting documents', 'Optional'],
              ].map(([key, label, hint]) => (
                <div className="field" key={key}>
                  <label>{label}</label>
                  <label className="upload-box" style={{ display: 'block', cursor: 'pointer' }}>
                    <div className="up-title">Upload file</div>
                    <div className="up-sub">{files[key] || hint}</div>
                    <input type="file" style={{ display: 'none' }} onChange={onFile(key)} />
                  </label>
                </div>
              ))}
              <div className="security-note">Documents are transmitted over an encrypted connection and reviewed only by our compliance and export verification teams.</div>
              <div className="form-nav">
                <button type="button" className="btn btn-outline-dark" onClick={prev}>Back</button>
                <button type="button" className="btn btn-brown" onClick={next}>Submit for Verification</button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
