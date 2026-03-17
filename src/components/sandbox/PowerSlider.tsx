import { useCallback, useRef } from 'react'
import './PowerSlider.css'

interface PowerSliderProps {
  value: number // 0-1
  onChange: (value: number) => void
  label?: string
}

const clamp = (value: number) => Math.min(1, Math.max(0, value))

export function PowerSlider({ value, onChange, label = 'Power' }: PowerSliderProps) {
  const railRef = useRef<HTMLDivElement>(null)

  const updateFromPointer = useCallback(
    (clientY: number) => {
      if (!railRef.current) return
      const rect = railRef.current.getBoundingClientRect()
      const ratio = 1 - (clientY - rect.top) / rect.height
      onChange(parseFloat(clamp(ratio).toFixed(2)))
    },
    [onChange],
  )

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.currentTarget.setPointerCapture(event.pointerId)
    updateFromPointer(event.clientY)
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if ((event.buttons & 1) === 0) return
    updateFromPointer(event.clientY)
  }

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.releasePointerCapture(event.pointerId)
  }

  return (
    <div className="power-slider">
      <p className="power-slider__label">
        {label}
        <span>{Math.round(value * 100)}%</span>
      </p>
      <div
        className="power-slider__rail"
        ref={railRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <div className="power-slider__fill" style={{ height: `${value * 100}%` }} />
        <div className="power-slider__thumb" style={{ bottom: `calc(${value * 100}% - 12px)` }}>
          <span />
        </div>
      </div>
    </div>
  )
}
