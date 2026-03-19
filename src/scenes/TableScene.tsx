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

      // Draw playing surface (Baize)
      const baize = new PIXI.Graphics()
      baize.rect(40, 40, TABLE_WIDTH - 80, TABLE_HEIGHT - 80)
      baize.fill(0x2a8b3e)
      localApp.stage.addChild(baize)

      // Draw Baulk Line
      const baulkLineX = 40 + (TABLE_WIDTH - 80) * 0.2
      const baulkLine = new PIXI.Graphics()
      baulkLine.moveTo(baulkLineX, 40)
      baulkLine.lineTo(baulkLineX, TABLE_HEIGHT - 40)
      baulkLine.stroke({ width: 2, color: 0xffffff, alpha: 0.5 })
      localApp.stage.addChild(baulkLine)

      // Draw "D"
      const dRadius = (TABLE_HEIGHT - 80) / 6
      const dGraphic = new PIXI.Graphics()
      dGraphic.arc(baulkLineX, TABLE_HEIGHT / 2, dRadius, Math.PI / 2, -Math.PI / 2)
      dGraphic.stroke({ width: 2, color: 0xffffff, alpha: 0.5 })
      localApp.stage.addChild(dGraphic)

      // Draw Pockets
      const pocketRadius = 15
      const pocketColor = 0x000000
      const pockets = [
        { x: 40, y: 40 }, 
        { x: TABLE_WIDTH / 2, y: 35 }, 
        { x: TABLE_WIDTH - 40, y: 40 }, 
        { x: 40, y: TABLE_HEIGHT - 40 }, 
        { x: TABLE_WIDTH / 2, y: TABLE_HEIGHT - 35 }, 
        { x: TABLE_WIDTH - 40, y: TABLE_HEIGHT - 40 }
      ]

      pockets.forEach(p => {
        const pocket = new PIXI.Graphics()
        pocket.circle(p.x, p.y, pocketRadius)
        pocket.fill(pocketColor)
        localApp.stage.addChild(pocket)
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
