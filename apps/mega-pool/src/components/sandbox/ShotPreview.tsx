import { useMemo, type CSSProperties } from 'react'
import type { SpinVector } from './CueBallSpinControl'
import type { ShotFrame } from '../../hooks/useShotSimulation'
import { SHOT_TABLE } from '../../hooks/useShotSimulation'
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
  frames?: ShotFrame[]
}

export function ShotPreview({ aimAngle, power, spin, cameraMode, shotLabel, frames }: ShotPreviewProps) {
  const cueOffsetX = spin.x * 16
  const cueOffsetY = -spin.y * 16
  const aimLength = 35 + power * 55
  const cueStyle = {
    '--offset-x': `${cueOffsetX}px`,
    '--offset-y': `${cueOffsetY}px`,
  } as CSSProperties

  const postImpactAngle = aimAngle + spin.x * 20
  const postImpactLength = 30 + Math.abs(spin.y) * 40

  const cueTrail = useMemo(() => {
    if (!frames?.length) return ''
    return frames
      .map((frame) => `${((frame.cue.x / SHOT_TABLE.width) * 100).toFixed(2)},${((frame.cue.y / SHOT_TABLE.height) * 100).toFixed(2)}`)
      .join(' ')
  }, [frames])

  const targetTrail = useMemo(() => {
    if (!frames?.length) return ''
    return frames
      .map((frame) => `${((frame.target.x / SHOT_TABLE.width) * 100).toFixed(2)},${((frame.target.y / SHOT_TABLE.height) * 100).toFixed(2)}`)
      .join(' ')
  }, [frames])

  const impactPoint = useMemo(() => {
    const impactFrame = frames?.find((frame) => frame.event === 'impact')
    if (!impactFrame) return null
    return {
      x: (impactFrame.target.x / SHOT_TABLE.width) * 100,
      y: (impactFrame.target.y / SHOT_TABLE.height) * 100,
    }
  }, [frames])

  return (
    <div className="shot-preview">
      <div className="shot-preview__canvas">
        <div className="shot-preview__felt">
          <div className="shot-preview__lights" />
          {frames?.length ? (
            <svg className="shot-preview__sim" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polyline className="shot-preview__trail shot-preview__trail--cue" points={cueTrail} />
              <polyline className="shot-preview__trail shot-preview__trail--target" points={targetTrail} />
              {impactPoint ? (
                <circle
                  className="shot-preview__impact"
                  cx={impactPoint.x}
                  cy={impactPoint.y}
                  r={1.3}
                />
              ) : null}
            </svg>
          ) : null}
          <div className="shot-preview__aim-vector" style={{ transform: `rotate(${aimAngle}deg)` }}>
            <span style={{ height: `${aimLength}%` }} />
          </div>
          <div className="shot-preview__path shot-preview__path--cue" style={{ transform: `rotate(${aimAngle}deg)` }}>
            <span style={{ height: `${aimLength + 10}%` }} />
          </div>
          <div className="shot-preview__path shot-preview__path--post" style={{ transform: `rotate(${postImpactAngle}deg)` }}>
            <span style={{ height: `${postImpactLength}%`, opacity: 0.4 + Math.abs(spin.y) * 0.4 }} />
          </div>
          <div className={`shot-preview__camera-rail shot-preview__camera-rail--${cameraMode}`}>
            <span style={{ width: `${40 + power * 40}%` }} />
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
