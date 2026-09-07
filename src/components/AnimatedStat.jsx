import React, { useEffect, useRef, useState } from 'react'

export default function AnimatedStat({ target, suffix = '', label }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setValue(target)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            animate()
          }
        })
      },
      { threshold: 0.4 }
    )
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function animate() {
    const duration = 1400
    let start = null
    function step(ts) {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(target * eased)
      if (progress < 1) requestAnimationFrame(step)
      else setValue(target)
    }
    requestAnimationFrame(step)
  }

  const display = target % 1 === 0 ? Math.round(value) : value.toFixed(1)

  return (
    <div>
      <div className="stat-num" ref={ref}>{display}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}
