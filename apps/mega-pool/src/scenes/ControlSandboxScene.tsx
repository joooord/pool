import { useState } from 'react'
import { AimDial } from '../components/sandbox/AimDial'
import { PowerSlider } from '../components/sandbox/PowerSlider'
import { CueBallSpinControl, type SpinVector } from '../components/sandbox/CueBallSpinControl'
import { ShotPreview } from '../components/sandbox/ShotPreview'
import './ControlSandboxScene.css'

type CameraMode = 'aim' | 'cinematic' | 'orbit'
type ShotPreset = 'stun' | 'screw' | 'follow'

type ShotPresetConfig = {
  title: string
  subtitle: string
  spin: SpinVector
  power: number
}

const SHOT_PRESETS: Record<ShotPreset, ShotPresetConfig> = {
  stun: {
    title: 'Stun + hold',
    subtitle: 'Level cue, neutral spin',
    spin: { x: 0, y: 0 },
    power: 0.48,
  },
  screw: {
    title: 'Backspin check',
    subtitle: 'Drag the cue ball back',
    spin: { x: 0, y: -0.65 },
    power: 0.58,
  },
  follow: {
    title: 'Topspin follow',
    subtitle: 'Push through the pack',
    spin: { x: 0, y: 0.7 },
    power: 0.62,
  },
}

const CAMERA_MODES: CameraMode[] = ['aim', 'cinematic', 'orbit']

export function ControlSandboxScene() {
  const [aimAngle, setAimAngle] = useState(18)
  const [power, setPower] = useState(0.55)
  const [spin, setSpin] = useState<SpinVector>({ x: 0.1, y: 0.2 })
  const [cameraMode, setCameraMode] = useState<CameraMode>('aim')
  const [activePreset, setActivePreset] = useState<ShotPreset>('stun')

  const handlePresetChange = (preset: ShotPreset) => {
    setActivePreset(preset)
    const config = SHOT_PRESETS[preset]
    setSpin(config.spin)
    setPower(config.power)
  }

  return (
    <div className="control-sandbox scene">
      <header className="control-sandbox__header">
        <div>
          <p className="control-sandbox__eyebrow">Control Lab</p>
          <h1>Touch sandbox</h1>
        </div>
        <p className="control-sandbox__summary">
          Prototype the single-finger shot flow. Adjust aim, pull-back power, and cue-ball contact before wiring it to
          physics.
        </p>
      </header>

      <div className="control-sandbox__grid">
        <div className="control-card control-card--wide">
          <ShotPreview
            aimAngle={aimAngle}
            power={power}
            spin={spin}
            cameraMode={cameraMode}
            shotLabel={SHOT_PRESETS[activePreset].title}
          />
        </div>

        <div className="control-card">
          <AimDial value={aimAngle} onChange={setAimAngle} helperText="Drag anywhere around the wheel" />
        </div>

        <div className="control-card control-card--stack">
          <CueBallSpinControl value={spin} onChange={setSpin} />
        </div>

        <div className="control-card control-card--compact">
          <PowerSlider value={power} onChange={setPower} />
        </div>
      </div>

      <section className="control-sandbox__presets">
        <div>
          <p className="control-sandbox__eyebrow">Shot presets</p>
          <p className="control-sandbox__helper">Switch between rehearsal patterns. Tweaks stay local.</p>
        </div>
        <div className="control-sandbox__preset-buttons">
          {Object.entries(SHOT_PRESETS).map(([key, config]) => (
            <button
              key={key}
              type="button"
              className={`preset-chip ${activePreset === key ? 'preset-chip--active' : ''}`}
              onClick={() => handlePresetChange(key as ShotPreset)}
            >
              <span>{config.title}</span>
              <small>{config.subtitle}</small>
            </button>
          ))}
        </div>
      </section>

      <section className="control-sandbox__cameras">
        <div>
          <p className="control-sandbox__eyebrow">Camera rails</p>
          <p className="control-sandbox__helper">Mocked timeline — tap to preview different takes.</p>
        </div>
        <div className="control-sandbox__camera-buttons">
          {CAMERA_MODES.map((mode) => (
            <button
              key={mode}
              type="button"
              className={`camera-button ${cameraMode === mode ? 'camera-button--active' : ''}`}
              onClick={() => setCameraMode(mode)}
            >
              <div className="camera-button__track">
                <span style={{ width: `${(mode === cameraMode ? 80 : 40) + power * 20}%` }} />
              </div>
              <strong>{mode}</strong>
              <small>
                {mode === 'aim' && 'Locked overhead'}
                {mode === 'cinematic' && 'Rail follow'}
                {mode === 'orbit' && 'Slow replay'}
              </small>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
