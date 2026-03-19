import { useEffect, useRef } from 'react'
import * as PIXI from 'pixi.js'

interface Ball {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: number;
  isCue?: boolean;
  graphics: PIXI.Graphics;
}

export function TableScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    let isSubscribed = true
    let app: PIXI.Application | null = null
    let resizeListener: (() => void) | null = null

    const initPixi = async () => {
      const localApp = new PIXI.Application()
      
      const TABLE_WIDTH = 800
      const TABLE_HEIGHT = 400
      
      await localApp.init({
        width: TABLE_WIDTH,
        height: TABLE_HEIGHT,
        backgroundColor: 0x1e602b,
        resolution: window.devicePixelRatio || 1,
        autoDensity: true,
        antialias: true
      })

      if (!isSubscribed) {
        localApp.destroy(true)
        return
      }

      app = localApp
      if (containerRef.current) containerRef.current.appendChild(localApp.canvas)

      // Interactive stage for aiming
      localApp.stage.eventMode = 'static'
      localApp.stage.hitArea = new PIXI.Rectangle(0, 0, TABLE_WIDTH, TABLE_HEIGHT)

      // Baize
      const baize = new PIXI.Graphics()
      baize.rect(40, 40, TABLE_WIDTH - 80, TABLE_HEIGHT - 80)
      baize.fill(0x2a8b3e)
      localApp.stage.addChild(baize)

      // Aim Line
      const aimLine = new PIXI.Graphics()
      localApp.stage.addChild(aimLine)

      // Balls Setup
      const balls: Ball[] = []
      const ballRadius = 8
      let nextId = 0

      const createBall = (x: number, y: number, color: number, isCue = false) => {
        const graphics = new PIXI.Graphics()
        graphics.circle(0, 0, ballRadius)
        graphics.fill(color)
        graphics.circle(-2, -2, 2)
        graphics.fill({ color: 0xffffff, alpha: 0.4 })
        graphics.x = x
        graphics.y = y
        localApp.stage.addChild(graphics)

        balls.push({ id: nextId++, x, y, vx: 0, vy: 0, radius: ballRadius, color, isCue, graphics })
      }

      const baulkLineX = 40 + (TABLE_WIDTH - 80) * 0.2
      createBall(baulkLineX - 20, TABLE_HEIGHT / 2, 0xffffff, true) // Cue

      const R = 0xdd2222, Y = 0xdddd22, B = 0x111111
      const rackPattern = [[R], [Y, R], [R, B, Y], [Y, R, Y, R], [R, Y, R, Y, Y]]
      const pyramidSpotX = 40 + (TABLE_WIDTH - 80) * 0.75
      const startY = TABLE_HEIGHT / 2
      const ballSpacing = ballRadius * 2 + 1

      rackPattern.forEach((row, colIndex) => {
        const rowX = pyramidSpotX + colIndex * (ballSpacing * 0.866)
        const rowHeight = (row.length - 1) * ballSpacing
        const startYForRow = startY - rowHeight / 2
        row.forEach((color, rowIndex) => {
          createBall(rowX, startYForRow + rowIndex * ballSpacing, color)
        })
      })

      let isDragging = false

      localApp.stage.on('pointerdown', () => {
        isDragging = true
      })

      localApp.stage.on('pointermove', (e) => {
        if (!isDragging) return
        const cueBall = balls.find(b => b.isCue)
        if (!cueBall) return

        aimLine.clear()
        aimLine.moveTo(cueBall.x, cueBall.y)
        aimLine.lineTo(e.global.x, e.global.y)
        aimLine.stroke({ width: 2, color: 0xffffff, alpha: 0.5 })
      })

      localApp.stage.on('pointerup', (e) => {
        if (!isDragging) return
        isDragging = false
        aimLine.clear()

        const cueBall = balls.find(b => b.isCue)
        if (!cueBall) return

        const dx = cueBall.x - e.global.x
        const dy = cueBall.y - e.global.y
        
        cueBall.vx = dx * 0.1
        cueBall.vy = dy * 0.1
      })

      localApp.ticker.add(() => {
        for (let i = 0; i < balls.length; i++) {
          const b = balls[i]
          b.x += b.vx
          b.y += b.vy
          b.vx *= 0.985
          b.vy *= 0.985

          if (Math.abs(b.vx) < 0.05) b.vx = 0
          if (Math.abs(b.vy) < 0.05) b.vy = 0

          // Cushions
          if (b.x < 40 + b.radius) { b.x = 40 + b.radius; b.vx *= -1 }
          if (b.x > TABLE_WIDTH - 40 - b.radius) { b.x = TABLE_WIDTH - 40 - b.radius; b.vx *= -1 }
          if (b.y < 40 + b.radius) { b.y = 40 + b.radius; b.vy *= -1 }
          if (b.y > TABLE_HEIGHT - 40 - b.radius) { b.y = TABLE_HEIGHT - 40 - b.radius; b.vy *= -1 }

          for (let j = i + 1; j < balls.length; j++) {
            const b2 = balls[j]
            const dx = b2.x - b.x
            const dy = b2.y - b.y
            const dist = Math.sqrt(dx*dx + dy*dy)
            const minDist = b.radius + b2.radius

            if (dist < minDist) {
              const overlap = minDist - dist
              const nx = dx / dist, ny = dy / dist
              b.x -= nx * overlap / 2
              b.y -= ny * overlap / 2
              b2.x += nx * overlap / 2
              b2.y += ny * overlap / 2

              const kx = b.vx - b2.vx, ky = b.vy - b2.vy
              const p = nx * kx + ny * ky
              b.vx -= p * nx
              b.vy -= p * ny
              b2.vx += p * nx
              b2.vy += p * ny
            }
          }

          b.graphics.x = b.x
          b.graphics.y = b.y
        }
      })

      const resize = () => {
        if (!containerRef.current || !localApp) return
        const parent = containerRef.current.parentElement
        if (!parent) return
        const padding = 32
        const availableWidth = parent.clientWidth - padding
        const availableHeight = parent.clientHeight - padding
        const scale = Math.min(availableWidth / TABLE_WIDTH, availableHeight / TABLE_HEIGHT)
        if (localApp.canvas) {
          localApp.canvas.style.width = `${TABLE_WIDTH * scale}px`
          localApp.canvas.style.height = `${TABLE_HEIGHT * scale}px`
        }
      }

      window.addEventListener('resize', resize)
      resizeListener = resize
      setTimeout(resize, 100)
    }

    initPixi()

    return () => {
      isSubscribed = false
      if (resizeListener) window.removeEventListener('resize', resizeListener)
      if (app) app.destroy(true)
    }
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
      <h2 style={{ margin: '0 0 16px 0', opacity: 0.8 }}>Table Preview</h2>
      <div 
        style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }} 
      >
        <div ref={containerRef} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
      </div>
    </div>
  )
}
