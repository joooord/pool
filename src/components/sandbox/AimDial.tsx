import { useCallback, useRef } from 'react'
import './AimDial.css'

interface AimDialProps {
  value: number
  onChange: (value: number) => void
  label?: string
  helperText?: string
}

const normaliseAngle = (angle: number) => {
  const wrapped = angle % 360
  return wrapped < 0 ? wrapped + 360 : wrapped
}

export function AimDial({ value, onChange, label = 'Aim', helperText }: AimDialProps) {
  const dialRef = useRef<HTMLDivElement>(null)

  const updateFromPointer = useCallback(
    (clientX: number, clientY: number) => {
      if (!dialRef.current) return
      const rect = dialRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const radians = Math.atan2(clientY - centerY, clientX - centerX)
      const degrees = normaliseAngle((radians * 180) / Math.PI + 90)
      onChange(parseFloat(degrees.toFixed(1)))
    },
    [onChange],
  )

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.currentTarget.setPointerCapture(event.pointerId)
    updateFromPointer(event.clientX, event.clientY)
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if ((event.buttons & 1) === 0) return
    updateFromPointer(event.clientX, event.clientY)
  }

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.releasePointerCapture(event.pointerId)
  }

  return (
    <div className="aim-dial">
      <div className="aim-dial__meta">
        <p className="aim-dial__label">{label}</p>
        <p className="aim-dial__value">{value.toFixed(1)}°</p>
        {helperText ? <p className="aim-dial__helper">{helperText}</p> : null}
      </div>
      <div
        className="aim-dial__control"
        ref={dialRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <div className="aim-dial__ticks">
          {Array.from({ length: 12 }).map((_, index) => (
            <span
              key={index}
              className={`aim-dial__tick ${index % 3 === 0 ? 'aim-dial__tick--major' : ''}`}
              style={{ transform: `rotate(${index * 30}deg)` }}
            />
          ))}
        </div>
        <div className="aim-dial__needle" style={{ transform: `rotate(${value}deg)` }}>
          <span />
        </div>
        <div className="aim-dial__grip" />
      </div>
    </div>
  )
}
