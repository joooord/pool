import { useEffect, useRef } from 'react'
import * as PIXI from 'pixi.js'

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

      if (containerRef.current) {
        containerRef.current.appendChild(localApp.canvas)
      }

      // Baize
      const baize = new PIXI.Graphics()
      baize.rect(40, 40, TABLE_WIDTH - 80, TABLE_HEIGHT - 80)
      baize.fill(0x2a8b3e)
      localApp.stage.addChild(baize)

      // Baulk Line & D
      const baulkLineX = 40 + (TABLE_WIDTH - 80) * 0.2
      const baulkLine = new PIXI.Graphics()
      baulkLine.moveTo(baulkLineX, 40)
      baulkLine.lineTo(baulkLineX, TABLE_HEIGHT - 40)
      baulkLine.stroke({ width: 2, color: 0xffffff, alpha: 0.5 })
      localApp.stage.addChild(baulkLine)

      const dRadius = (TABLE_HEIGHT - 80) / 6
      const dGraphic = new PIXI.Graphics()
      dGraphic.arc(baulkLineX, TABLE_HEIGHT / 2, dRadius, Math.PI / 2, -Math.PI / 2)
      dGraphic.stroke({ width: 2, color: 0xffffff, alpha: 0.5 })
      localApp.stage.addChild(dGraphic)

      // Pockets
      const pocketRadius = 15
      const pocketColor = 0x000000
      const pockets = [
        { x: 40, y: 40 }, { x: TABLE_WIDTH / 2, y: 35 }, { x: TABLE_WIDTH - 40, y: 40 },
        { x: 40, y: TABLE_HEIGHT - 40 }, { x: TABLE_WIDTH / 2, y: TABLE_HEIGHT - 35 }, { x: TABLE_WIDTH - 40, y: TABLE_HEIGHT - 40 }
      ]
      pockets.forEach(p => {
        const pocket = new PIXI.Graphics()
        pocket.circle(p.x, p.y, pocketRadius)
        pocket.fill(pocketColor)
        localApp.stage.addChild(pocket)
      })

      // BALLS
      const ballRadius = 8
      
      const drawBall = (x: number, y: number, color: number) => {
        const b = new PIXI.Graphics()
        b.circle(x, y, ballRadius)
        b.fill(color)
        
        // Add a small specular highlight for depth
        b.circle(x - 2, y - 2, 2)
        b.fill({ color: 0xffffff, alpha: 0.4 })
        
        localApp.stage.addChild(b)
      }

      // Cue Ball
      drawBall(baulkLineX - 20, TABLE_HEIGHT / 2, 0xffffff) // White

      // Triangle Rack
      const pyramidSpotX = 40 + (TABLE_WIDTH - 80) * 0.75
      const startY = TABLE_HEIGHT / 2
      
      // Standard English 8-ball WPA rack pattern:
      // Red(1), Yellow(2), Black(3)
      // Usually alternating on corners, but let's just make a valid pattern.
      // R=0xdd2222, Y=0xdddd22, B=0x111111
      const R = 0xdd2222
      const Y = 0xdddd22
      const B = 0x111111
      
      const rackPattern = [
        [R],
        [Y, R],
        [R, B, Y],
        [Y, R, Y, R],
        [R, Y, R, Y, Y] // Corners are different colors in standard WEPF rack
      ]

      const ballSpacing = ballRadius * 2 + 1 // 1px gap
      
      rackPattern.forEach((row, colIndex) => {
        const rowX = pyramidSpotX + colIndex * (ballSpacing * 0.866) // sqrt(3)/2
        const rowHeight = (row.length - 1) * ballSpacing
        const startYForRow = startY - rowHeight / 2

        row.forEach((color, rowIndex) => {
          const rowY = startYForRow + rowIndex * ballSpacing
          drawBall(rowX, rowY, color)
        })
      })

      const resize = () => {
        if (!containerRef.current) return
        const parent = containerRef.current.parentElement
        if (!parent) return

        const padding = 32
        const availableWidth = parent.clientWidth - padding
        const availableHeight = parent.clientHeight - padding
        
        const scale = Math.min(availableWidth / TABLE_WIDTH, availableHeight / TABLE_HEIGHT)

        if (localApp && localApp.canvas) {
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
        style={{ 
          flex: 1, 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          overflow: 'hidden'
        }} 
      >
        <div ref={containerRef} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
      </div>
    </div>
  )
}
