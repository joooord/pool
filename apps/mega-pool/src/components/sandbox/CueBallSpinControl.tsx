import { useCallback, useRef } from 'react'
import './CueBallSpinControl.css'

export interface SpinVector {
  x: number // -1 left, 1 right
  y: number // -1 bottom, 1 top
}

interface CueBallSpinControlProps {
  value: SpinVector
  onChange: (value: SpinVector) => void
}

const clamp = (value: number) => Math.max(-1, Math.min(1, value))

export function CueBallSpinControl({ value, onChange }: CueBallSpinControlProps) {
  const padRef = useRef<HTMLDivElement>(null)

  const updateFromPointer = useCallback(
    (clientX: number, clientY: number) => {
      if (!padRef.current) return
      const rect = padRef.current.getBoundingClientRect()
      const relativeX = (clientX - rect.left) / rect.width
      const relativeY = (clientY - rect.top) / rect.height
      const nextValue = {
        x: parseFloat(clamp((relativeX - 0.5) * 2).toFixed(2)),
        y: parseFloat(clamp((0.5 - relativeY) * 2).toFixed(2)),
      }
      onChange(nextValue)
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

  const indicatorStyle = {
    left: `${((value.x + 1) / 2) * 100}%`,
    top: `${((1 - value.y) / 2) * 100}%`,
  }

  return (
    <div className="cue-spin">
      <div className="cue-spin__header">
        <p className="cue-spin__title">Cue-ball contact</p>
        <p className="cue-spin__readout">
          X {value.x.toFixed(2)} / Y {value.y.toFixed(2)}
        </p>
      </div>
      <div
        className="cue-spin__pad"
        ref={padRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <div className="cue-spin__ball">
          <div className="cue-spin__target">
            <span style={indicatorStyle} />
          </div>
        </div>
        <div className="cue-spin__axes">
          <span>Top</span>
          <span>Bottom</span>
        </div>
      </div>
    </div>
  )
}
