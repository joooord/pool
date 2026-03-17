import type { CSSProperties } from 'react'
import type { SpinVector } from './CueBallSpinControl'
import './ShotPreview.css'

const CAMERA_COPY: Record<string, string> = {
  aim: 'Overhead aim cam',
  cinematic: 'Rail follow (24fps)',
  orbit: 'Slow orbit replay',
}

interface ShotPreviewProps {
  aimAngle: number
  power: number
  spin: SpinVector
  cameraMode: keyof typeof CAMERA_COPY
  shotLabel: string
}

export function ShotPreview({ aimAngle, power, spin, cameraMode, shotLabel }: ShotPreviewProps) {
  const cueOffsetX = spin.x * 16
  const cueOffsetY = -spin.y * 16
  const aimLength = 35 + power * 55
  const cueStyle = {
    '--offset-x': `${cueOffsetX}px`,
    '--offset-y': `${cueOffsetY}px`,
  } as CSSProperties

  return (
    <div className="shot-preview">
      <div className="shot-preview__canvas">
        <div className="shot-preview__felt">
          <div className="shot-preview__lights" />
          <div className="shot-preview__aim-vector" style={{ transform: `rotate(${aimAngle}deg)` }}>
            <span style={{ height: `${aimLength}%` }} />
          </div>
          <div className="shot-preview__ball shot-preview__ball--cue" style={cueStyle} />
          <div className="shot-preview__ball shot-preview__ball--target" />
          <div className="shot-preview__ghost" style={{ opacity: power * 0.6 }} />
        </div>
      </div>
      <div className="shot-preview__footer">
        <div>
          <p className="shot-preview__caption">{shotLabel}</p>
          <p className="shot-preview__subline">{CAMERA_COPY[cameraMode]}</p>
        </div>
        <div className="shot-preview__stats">
          <span>{Math.round(power * 100)}% pull</span>
          <span>
            Spin {spin.x >= 0 ? '+' : '-'}X/{spin.y >= 0 ? '+' : '-'}Y
          </span>
        </div>
      </div>
    </div>
  )
}
