import { useEffect, useState } from 'react'
import { AimDial } from '../components/sandbox/AimDial'
import { PowerSlider } from '../components/sandbox/PowerSlider'
import { CueBallSpinControl, type SpinVector } from '../components/sandbox/CueBallSpinControl'
import { ShotPreview } from '../components/sandbox/ShotPreview'
import { useShotSimulation } from '../hooks/useShotSimulation'
import './ControlSandboxScene.css'

type CameraMode = 'aim' | 'cinematic' | 'orbit'
type ShotPreset = 'stun' | 'screw' | 'follow'

type ShotPresetConfig = {
  title: string
  subtitle: string
  spin: SpinVector
  power: number
}

type CustomPreset = ShotPresetConfig & { id: string }

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
  const [customPresets, setCustomPresets] = useState<CustomPreset[]>([])
  const { frames, isRunning, runSimulation } = useShotSimulation()

  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = window.localStorage.getItem('mega.custom-presets')
    if (!stored) return
    try {
      const parsed = JSON.parse(stored) as CustomPreset[]
      setCustomPresets(parsed)
    } catch (error) {
      console.warn('Failed to parse presets', error)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem('mega.custom-presets', JSON.stringify(customPresets))
  }, [customPresets])

  const impactFrame = frames.find((frame) => frame.event === 'impact')

  const applyPresetConfig = (config: ShotPresetConfig) => {
    setSpin(config.spin)
    setPower(config.power)
  }

  const handlePresetChange = (preset: ShotPreset) => {
    setActivePreset(preset)
    const config = SHOT_PRESETS[preset]
    applyPresetConfig(config)
  }

  const handleCustomSelect = (preset: CustomPreset) => {
    setActivePreset('stun')
    applyPresetConfig(preset)
  }

  const handleCustomSave = () => {
    const id = `custom-${Date.now()}`
    const title = `Custom ${customPresets.length + 1}`
    const subtitle = `${Math.round(power * 100)}% • spin ${spin.x.toFixed(2)},${spin.y.toFixed(2)}`
    const next: CustomPreset = {
      id,
      title,
      subtitle,
      spin,
      power,
    }
    setCustomPresets((prev) => [...prev, next])
  }

  const handleSimulate = () => {
    runSimulation({ cueAngleDeg: aimAngle, power, spin })
  }

  return (
    <div className="control-sandbox scene">
      <header className="control-sandbox__header">
        <div>
          <p className="control-sandbox__eyebrow">Control Lab</p>
          <h1>Touch sandbox</h1>
        </div>
        <div className="control-sandbox__header-actions">
          <p className="control-sandbox__summary">
            Prototype the single-finger shot flow. Adjust aim, pull-back power, and cue-ball contact before wiring it to
            physics.
          </p>
          <button className="control-sandbox__simulate" type="button" onClick={handleSimulate} disabled={isRunning}>
            {isRunning ? 'Simulating…' : 'Simulate shot'}
          </button>
        </div>
      </header>

      <div className="control-sandbox__grid">
        <div className="control-card control-card--wide">
          <ShotPreview
            aimAngle={aimAngle}
            power={power}
            spin={spin}
            cameraMode={cameraMode}
            shotLabel={SHOT_PRESETS[activePreset].title}
            frames={frames}
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

      <section className="control-sandbox__telemetry">
        <div>
          <p className="control-sandbox__eyebrow">Shot telemetry</p>
          <p className="control-sandbox__helper">
            Run the simulation to capture cue/target velocities plus first-contact timing. Values are approximations until
            the full physics harness lands.
          </p>
        </div>
        <div className="telemetry-grid">
          <div>
            <span>Impact time</span>
            <strong>{impactFrame ? `${(impactFrame.t / 1000).toFixed(2)}s` : '—'}</strong>
          </div>
          <div>
            <span>Cue velocity (max)</span>
            <strong>
              {frames.length ? `${(Math.max(...frames.map((f) => f.cueVelocity)) * 100).toFixed(1)} u/s` : '—'}
            </strong>
          </div>
          <div>
            <span>Target velocity (max)</span>
            <strong>
              {frames.length ? `${(Math.max(...frames.map((f) => f.targetVelocity)) * 100).toFixed(1)} u/s` : '—'}
            </strong>
          </div>
          <div>
            <span>Frames captured</span>
            <strong>{frames.length || '—'}</strong>
          </div>
        </div>
      </section>

      <section className="control-sandbox__presets">
        <div className="control-sandbox__presets-header">
          <div>
            <p className="control-sandbox__eyebrow">Shot presets</p>
            <p className="control-sandbox__helper">Switch between rehearsal patterns. Tweaks stay local.</p>
          </div>
          <button type="button" className="preset-save" onClick={handleCustomSave}>
            Save current
          </button>
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
        {customPresets.length ? (
          <div className="control-sandbox__customs">
            {customPresets.map((preset) => (
              <button key={preset.id} type="button" className="preset-chip preset-chip--ghost" onClick={() => handleCustomSelect(preset)}>
                <span>{preset.title}</span>
                <small>{preset.subtitle}</small>
              </button>
            ))}
          </div>
        ) : null}
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
