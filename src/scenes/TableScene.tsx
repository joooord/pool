import { useEffect, useRef } from 'react'
import * as PIXI from 'pixi.js'
import { useGameStore } from '../store/gameStore'

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

const R = 0xdd2222; // Red
const Y = 0xdddd22; // Yellow
const B = 0x111111; // Black
const W = 0xffffff; // White

export function TableScene() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const currentPlayer = useGameStore(state => state.currentPlayer);
  const message = useGameStore(state => state.message);
  const p1Color = useGameStore(state => state.player1Color);
  const p2Color = useGameStore(state => state.player2Color);

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

      localApp.stage.eventMode = 'static'
      localApp.stage.hitArea = new PIXI.Rectangle(0, 0, TABLE_WIDTH, TABLE_HEIGHT)

      const baize = new PIXI.Graphics()
      baize.rect(40, 40, TABLE_WIDTH - 80, TABLE_HEIGHT - 80)
      baize.fill(0x2a8b3e)
      localApp.stage.addChild(baize)

      const aimLine = new PIXI.Graphics()
      localApp.stage.addChild(aimLine)

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
      const cueStartX = baulkLineX - 20
      const cueStartY = TABLE_HEIGHT / 2
      createBall(cueStartX, cueStartY, W, true)

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
      let canShoot = true 
      let currentTurnPots: number[] = []

      localApp.stage.on('pointerdown', () => {
        if (canShoot && useGameStore.getState().currentPlayer === 1) isDragging = true
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
        
        let power = Math.sqrt(dx*dx + dy*dy) * 0.05
        if (power > 15) power = 15
        
        const angle = Math.atan2(dy, dx)
        cueBall.vx = Math.cos(angle) * power
        cueBall.vy = Math.sin(angle) * power
        
        canShoot = false
        currentTurnPots = []
      })

      const pockets = [
        { x: 40, y: 40 }, { x: TABLE_WIDTH / 2, y: 35 }, { x: TABLE_WIDTH - 40, y: 40 },
        { x: 40, y: TABLE_HEIGHT - 40 }, { x: TABLE_WIDTH / 2, y: TABLE_HEIGHT - 35 }, { x: TABLE_WIDTH - 40, y: TABLE_HEIGHT - 40 }
      ]
      const pocketRadius = 15

      const triggerAI = () => {
        setTimeout(() => {
          const cueBall = balls.find(b => b.isCue)
          if (!cueBall) return;
          
          const state = useGameStore.getState();
          const aiColorStr = state.player2Color;
          
          let targetColor = -1;
          if (aiColorStr === 'red') targetColor = R;
          else if (aiColorStr === 'yellow') targetColor = Y;
          
          let targets = balls.filter(b => !b.isCue && b.color !== B);
          if (targetColor !== -1) {
            targets = balls.filter(b => b.color === targetColor);
            if (targets.length === 0) targets = balls.filter(b => b.color === B);
          }
          
          if (targets.length === 0) targets = balls.filter(b => !b.isCue);

          const target = targets[Math.floor(Math.random() * targets.length)];
          if (!target) return;

          const dx = target.x - cueBall.x;
          const dy = target.y - cueBall.y;
          const angle = Math.atan2(dy, dx);
          
          // Slight randomness to AI aim
          const finalAngle = angle + (Math.random() * 0.2 - 0.1);
          const power = 8 + Math.random() * 4;

          cueBall.vx = Math.cos(finalAngle) * power;
          cueBall.vy = Math.sin(finalAngle) * power;
          
          canShoot = false;
          currentTurnPots = [];
        }, 1500);
      };

      localApp.ticker.add(() => {
        let anyMoving = false

        for (let i = balls.length - 1; i >= 0; i--) {
          const b = balls[i]
          
          if (Math.abs(b.vx) > 0.05 || Math.abs(b.vy) > 0.05) {
            anyMoving = true
          }

          b.x += b.vx
          b.y += b.vy
          b.vx *= 0.985
          b.vy *= 0.985

          if (Math.abs(b.vx) < 0.05) b.vx = 0
          if (Math.abs(b.vy) < 0.05) b.vy = 0

          let pocketed = false
          for (const p of pockets) {
            const pdx = b.x - p.x
            const pdy = b.y - p.y
            if (Math.sqrt(pdx*pdx + pdy*pdy) < pocketRadius) {
              pocketed = true
              break
            }
          }

          if (pocketed) {
            if (b.isCue) {
              b.x = cueStartX
              b.y = cueStartY
              b.vx = 0
              b.vy = 0
              currentTurnPots.push(W)
            } else {
              b.graphics.destroy()
              currentTurnPots.push(b.color)
              balls.splice(i, 1)
              continue
            }
          }

          if (b.x < 40 + b.radius) { b.x = 40 + b.radius; b.vx *= -1 }
          if (b.x > TABLE_WIDTH - 40 - b.radius) { b.x = TABLE_WIDTH - 40 - b.radius; b.vx *= -1 }
          if (b.y < 40 + b.radius) { b.y = 40 + b.radius; b.vy *= -1 }
          if (b.y > TABLE_HEIGHT - 40 - b.radius) { b.y = TABLE_HEIGHT - 40 - b.radius; b.vy *= -1 }

          for (let j = i - 1; j >= 0; j--) {
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

        if (!anyMoving && !canShoot) {
          canShoot = true 
          
          const isFoul = currentTurnPots.includes(W);
          const state = useGameStore.getState();
          
          if (isFoul) {
            state.foul('In-off (potted white)');
          } else {
            let validPot = false;
            let pottedRed = false;
            let pottedYellow = false;
            
            for(let c of currentTurnPots) {
              if (c === R) pottedRed = true;
              if (c === Y) pottedYellow = true;
            }

            const pColor = state.currentPlayer === 1 ? state.player1Color : state.player2Color;

            if (pColor === null && (pottedRed || pottedYellow)) {
              if (pottedRed && !pottedYellow) {
                 state.assignColors('red', state.currentPlayer);
                 validPot = true;
              } else if (pottedYellow && !pottedRed) {
                 state.assignColors('yellow', state.currentPlayer);
                 validPot = true;
              } else {
                 validPot = true; 
              }
            } else if (pColor !== null) {
              if (pColor === 'red' && pottedRed) validPot = true;
              if (pColor === 'yellow' && pottedYellow) validPot = true;
            }
            
            state.endTurn(validPot);
          }
          
          if (useGameStore.getState().currentPlayer === 2) {
             triggerAI();
          }
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
      <div style={{ padding: '16px', backgroundColor: '#111', color: '#fff', textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 8px 0', fontSize: '1.2rem' }}>{message}</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', fontSize: '0.9rem', opacity: 0.8 }}>
          <div>
            <span style={{ fontWeight: currentPlayer === 1 ? 'bold' : 'normal', color: currentPlayer === 1 ? '#00ffcc' : '#fff' }}>
              P1 Color: {p1Color || 'Open'}
            </span>
          </div>
          <div>
            <span style={{ fontWeight: currentPlayer === 2 ? 'bold' : 'normal', color: currentPlayer === 2 ? '#ff003c' : '#fff' }}>
              CPU Color: {p2Color || 'Open'}
            </span>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', backgroundColor: '#000' }}>
        <div ref={containerRef} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
      </div>
    </div>
  )
}
