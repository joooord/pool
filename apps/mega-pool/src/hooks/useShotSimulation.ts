import { useCallback, useRef, useState } from 'react'
import { Bodies, Body, Engine, World, SAT, type IBodyDefinition } from 'matter-js'

export interface ShotInput {
  cueAngleDeg: number
  power: number // 0-1
  spin: { x: number; y: number }
}

export interface ShotFrame {
  t: number
  cue: { x: number; y: number }
  target: { x: number; y: number }
  cueVelocity: number
  targetVelocity: number
  event?: 'impact'
}

interface ShotSimulationConfig {
  tableWidth: number
  tableHeight: number
  cushion: number
  sampleRate?: number // frames collected per second
}

const DEFAULT_CONFIG: ShotSimulationConfig = {
  tableWidth: 260,
  tableHeight: 130,
  cushion: 8,
  sampleRate: 60,
}

const BALL_RADIUS = 5.7
const BALL_MASS = 1

const lowVelocity = (body: Body) => Math.hypot(body.velocity.x, body.velocity.y)

export function useShotSimulation(config: Partial<ShotSimulationConfig> = {}) {
  const settings = { ...DEFAULT_CONFIG, ...config }
  const [frames, setFrames] = useState<ShotFrame[]>([])
  const [isRunning, setIsRunning] = useState(false)
  const engineRef = useRef<Engine | null>(null)

  const buildWorld = useCallback(() => {
    const engine = Engine.create({ enableSleeping: true })
    const world = engine.world
    world.gravity.y = 0

    const { tableWidth, tableHeight, cushion } = settings

    const walls: Body[] = [
      Bodies.rectangle(tableWidth / 2, -cushion / 2, tableWidth, cushion, { isStatic: true }),
      Bodies.rectangle(tableWidth / 2, tableHeight + cushion / 2, tableWidth, cushion, { isStatic: true }),
      Bodies.rectangle(-cushion / 2, tableHeight / 2, cushion, tableHeight, { isStatic: true }),
      Bodies.rectangle(tableWidth + cushion / 2, tableHeight / 2, cushion, tableHeight, { isStatic: true }),
    ]

    walls.forEach((wall) => World.addBody(world, wall))

    const cueBall = Bodies.circle(tableWidth * 0.35, tableHeight * 0.55, BALL_RADIUS, ballOptions())
    const targetBall = Bodies.circle(tableWidth * 0.7, tableHeight * 0.35, BALL_RADIUS, ballOptions())

    World.add(world, [cueBall, targetBall])

    engineRef.current = engine
    return { engine, cueBall, targetBall }
  }, [settings])

  const runSimulation = useCallback(
    (input: ShotInput) => {
      setIsRunning(true)
      const { engine, cueBall, targetBall } = buildWorld()
      const world = engine.world

      const angleRad = (input.cueAngleDeg * Math.PI) / 180
      const impulseMagnitude = 0.003 + input.power * 0.015
      const impulse = {
        x: Math.cos(angleRad) * impulseMagnitude,
        y: Math.sin(angleRad) * impulseMagnitude,
      }

      Body.applyForce(cueBall, cueBall.position, impulse)
      Body.setAngularVelocity(cueBall, -input.spin.x * 0.2)

      const collected: ShotFrame[] = []
      const sampleStep = 1000 / (settings.sampleRate ?? 60)
      const stepMs = 1000 / 240
      let timeElapsed = 0
      let accumulator = 0
      let impactLogged = false

      for (let i = 0; i < 240 * 8; i += 1) {
        Engine.update(engine, stepMs)
        timeElapsed += stepMs
        accumulator += stepMs

        if (!impactLogged && SAT.collides(cueBall, targetBall).collided) {
          impactLogged = true
        }

        if (accumulator >= sampleStep) {
          accumulator = 0
          collected.push({
            t: timeElapsed,
            cue: { ...cueBall.position },
            target: { ...targetBall.position },
            cueVelocity: lowVelocity(cueBall),
            targetVelocity: lowVelocity(targetBall),
            event: impactLogged && !collected.some((f) => f.event === 'impact') ? 'impact' : undefined,
          })
        }

        if (lowVelocity(cueBall) < 0.005 && lowVelocity(targetBall) < 0.005) {
          break
        }
      }

      setFrames(collected)
      World.clear(world, false)
      Engine.clear(engine)
      setIsRunning(false)
    },
    [buildWorld, settings.sampleRate]
  )

  return { frames, isRunning, runSimulation }
}

function ballOptions(): IBodyDefinition {
  return {
    restitution: 0.92,
    friction: 0.01,
    frictionAir: 0.01,
    frictionStatic: 0.0,
    slop: 0.01,
    mass: BALL_MASS,
  }
}
