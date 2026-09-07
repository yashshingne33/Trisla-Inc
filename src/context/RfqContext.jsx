import React, { createContext, useContext, useState, useCallback } from 'react'

const RfqContext = createContext(null)

let nextId = 1

export function RfqProvider({ children }) {
  const [items, setItems] = useState([])

  const addItem = useCallback((product) => {
    setItems((prev) => {
      if (prev.some((i) => i.slug === product.slug)) return prev
      return [...prev, { rfqId: nextId++, slug: product.slug, name: product.name, img: product.image, packagingHint: product.packagingHint || '' }]
    })
  }, [])

  const removeItem = useCallback((rfqId) => {
    setItems((prev) => prev.filter((i) => i.rfqId !== rfqId))
  }, [])

  const isAdded = useCallback((slug) => items.some((i) => i.slug === slug), [items])

  const clear = useCallback(() => setItems([]), [])

  return (
    <RfqContext.Provider value={{ items, addItem, removeItem, isAdded, clear }}>
      {children}
    </RfqContext.Provider>
  )
}

export function useRfq() {
  const ctx = useContext(RfqContext)
  if (!ctx) throw new Error('useRfq must be used within RfqProvider')
  return ctx
}
