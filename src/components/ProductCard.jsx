import React from 'react'
import { Link } from 'react-router-dom'
import { useRfq } from '../context/RfqContext.jsx'

export default function ProductCard({ product }) {
  const { addItem, isAdded } = useRfq()
  const added = isAdded(product.slug)

  return (
    <div className="product-card">
      <div className="p-media">
        <img src={product.imageCard} alt={product.alt} loading="lazy" />
      </div>
      <h3>{product.name}</h3>
      <p className="desc">{product.shortDesc}</p>
      {product.tags && (
        <div className="tag-row">
          {product.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
        </div>
      )}
      <div className="card-actions">
        <Link to={`/products/${product.slug}`} className="card-link">View Specifications</Link>
        <button
          className={`rfq-add-btn${added ? ' is-added' : ''}`}
          onClick={() => addItem(product)}
        >
          {added ? 'Added' : 'Add to RFQ +'}
        </button>
      </div>
    </div>
  )
}
