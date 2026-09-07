import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { RfqProvider } from './context/RfqContext.jsx'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Quality from './pages/Quality.jsx'
import Exports from './pages/Exports.jsx'
import Contact from './pages/Contact.jsx'
import Onboarding from './pages/Onboarding.jsx'
import Rfq from './pages/Rfq.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <RfqProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/exports" element={<Exports />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/rfq" element={<Rfq />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </RfqProvider>
  )
}
