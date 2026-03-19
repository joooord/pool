import { useEffect, useRef, useState } from 'react'
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
  spinX: number;
  spinY: number;
}

const R = 0xdd2222; 
const Y = 0xdddd22; 
const B = 0x111111; 
const W = 0xffffff; 

let audioCtx: AudioContext | null = null;
const playClack = (velocity: number) => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();
  if (velocity < 0.2) return;
  
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  
  osc.type = 'sine';
  osc.frequency.setValueAtTime(800 + Math.random() * 200, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + 0.05);
  
  const vol = Math.min(0.5, velocity * 0.05);
  gain.gain.setValueAtTime(vol, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);
  
  osc.start();
  osc.stop(audioCtx.currentTime + 0.05);
};

export function TableScene() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [spin, setSpin] = useState({ x: 0, y: 0 })
  
  const currentPlayer = useGameStore(state => state.currentPlayer);
  const message = useGameStore(state => state.message);
  const p1Color = useGameStore(state => state.player1Color);
  const p2Color = useGameStore(state => state.player2Color);
  const gameStatus = useGameStore(state => state.status);

  // Spin ref for the Pixi loop to read without stale closure
  const spinRef = useRef(spin)
  useEffect(() => { spinRef.current = spin }, [spin])

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
      
      const cueStick = new PIXI.Graphics()
      localApp.stage.addChild(cueStick)

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

        balls.push({ id: nextId++, x, y, vx: 0, vy: 0, radius: ballRadius, color, isCue, graphics, spinX: 0, spinY: 0 })
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
        if (!audioCtx) audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        
        const state = useGameStore.getState();
        if (state.status !== 'playing') return;
        if (canShoot && state.currentPlayer === 1) isDragging = true
      })

      localApp.stage.on('pointermove', (e) => {
        if (!isDragging) return
        const cueBall = balls.find(b => b.isCue)
        if (!cueBall) return

        const dx = cueBall.x - e.global.x
        const dy = cueBall.y - e.global.y
        const angle = Math.atan2(dy, dx)
        const dist = Math.min(Math.sqrt(dx*dx + dy*dy), 300)

        // Calculate spin deflection for aim line visual
        const deflection = spinRef.current.x * 0.05
        const deflectedAngle = angle + deflection

        aimLine.clear()
        aimLine.moveTo(cueBall.x, cueBall.y)
        aimLine.lineTo(cueBall.x + Math.cos(deflectedAngle) * 500, cueBall.y + Math.sin(deflectedAngle) * 500)
        aimLine.stroke({ width: 1, color: 0xffffff, alpha: 0.3 })

        cueStick.clear()
        const stickStartX = cueBall.x - Math.cos(angle) * (15 + dist * 0.2)
        const stickStartY = cueBall.y - Math.sin(angle) * (15 + dist * 0.2)
        const stickEndX = stickStartX - Math.cos(angle) * 100
        const stickEndY = stickStartY - Math.sin(angle) * 100
        
        cueStick.moveTo(stickStartX, stickStartY)
        cueStick.lineTo(stickEndX, stickEndY)
        cueStick.stroke({ width: 4, color: 0x8b4513, alpha: 1 })
      })

      localApp.stage.on('pointerup', (e) => {
        if (!isDragging) return
        isDragging = false
        aimLine.clear()
        cueStick.clear()

        const cueBall = balls.find(b => b.isCue)
        if (!cueBall) return

        const dx = cueBall.x - e.global.x
        const dy = cueBall.y - e.global.y
        
        let power = Math.sqrt(dx*dx + dy*dy) * 0.05
        if (power > 15) power = 15
        
        if (power > 0.5) {
          playClack(power * 2); 
          if (navigator.vibrate) navigator.vibrate(15); // Haptics for hitting the ball
        }
        
        const angle = Math.atan2(dy, dx)
        const deflection = spinRef.current.x * 0.05
        const finalAngle = angle + deflection

        cueBall.vx = Math.cos(finalAngle) * power
        cueBall.vy = Math.sin(finalAngle) * power
        
        // Add physical spin momentum (used when hitting cushions)
        cueBall.spinX = spinRef.current.x * power * 0.1
        cueBall.spinY = spinRef.current.y * power * 0.1
        
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
          const state = useGameStore.getState();
          if (state.status !== 'playing') return;

          const cueBall = balls.find(b => b.isCue)
          if (!cueBall) return;
          
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
          
          const finalAngle = angle + (Math.random() * 0.1 - 0.05);
          const power = 8 + Math.random() * 4;

          playClack(power * 2);

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
          
          // Degrade spin over time
          b.spinX *= 0.98
          b.spinY *= 0.98

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
              b.spinX = 0
              b.spinY = 0
              currentTurnPots.push(W)
            } else {
              b.graphics.destroy()
              currentTurnPots.push(b.color)
              balls.splice(i, 1)
              continue
            }
          }

          let bounced = false;
          let impactVel = 0;
          
          // Simple english/spin logic when hitting a cushion
          if (b.x < 40 + b.radius) { b.x = 40 + b.radius; b.vx *= -1; b.vy += b.spinY; bounced = true; impactVel = Math.abs(b.vx); }
          if (b.x > TABLE_WIDTH - 40 - b.radius) { b.x = TABLE_WIDTH - 40 - b.radius; b.vx *= -1; b.vy += b.spinY; bounced = true; impactVel = Math.abs(b.vx); }
          if (b.y < 40 + b.radius) { b.y = 40 + b.radius; b.vy *= -1; b.vx += b.spinX; bounced = true; impactVel = Math.abs(b.vy); }
          if (b.y > TABLE_HEIGHT - 40 - b.radius) { b.y = TABLE_HEIGHT - 40 - b.radius; b.vy *= -1; b.vx += b.spinX; bounced = true; impactVel = Math.abs(b.vy); }
          
          if (bounced) {
            playClack(impactVel);
            if (b.isCue && navigator.vibrate) navigator.vibrate(5); // Mini haptic tick on cushion hit
          }

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
              
              playClack(Math.abs(p));
            }
          }

          b.graphics.x = b.x
          b.graphics.y = b.y
        }

        if (!anyMoving && !canShoot) {
          canShoot = true 
          
          const isFoul = currentTurnPots.includes(W);
          const pottedBlack = currentTurnPots.includes(B);
          const state = useGameStore.getState();

          if (state.status !== 'playing') return;

          if (pottedBlack) {
            if (isFoul) {
              state.potBlack(state.currentPlayer, false);
            } else {
              const pColor = state.currentPlayer === 1 ? state.player1Color : state.player2Color;
              if (!pColor) {
                 state.potBlack(state.currentPlayer, false);
              } else {
                const targetColor = pColor === 'red' ? R : Y;
                const remainingTargets = balls.filter(b => b.color === targetColor);
                if (remainingTargets.length === 0) {
                  state.potBlack(state.currentPlayer, true);
                } else {
                  state.potBlack(state.currentPlayer, false);
                }
              }
            }
          } else if (isFoul) {
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
          
          if (useGameStore.getState().currentPlayer === 2 && useGameStore.getState().status === 'playing') {
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
        
        // Ensure a bit more padding on mobile so it's not edge-to-edge making aiming hard
        const mobilePad = window.innerWidth < 600 ? 64 : padding
        const scale = Math.min((availableWidth - mobilePad) / TABLE_WIDTH, (availableHeight - mobilePad) / TABLE_HEIGHT)
        
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
      if (audioCtx) {
        audioCtx.close();
        audioCtx = null;
      }
    }
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', position: 'relative' }}>
      <div style={{ padding: '16px', backgroundColor: '#111', color: '#fff', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.5)', zIndex: 10 }}>
        <h2 style={{ margin: '0 0 8px 0', fontSize: '1.2rem', transition: 'color 0.3s' }}>{message}</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', fontSize: '0.9rem', opacity: 0.8 }}>
          <div>
            <span style={{ fontWeight: currentPlayer === 1 ? 'bold' : 'normal', color: currentPlayer === 1 ? '#00ffcc' : '#fff', transition: 'color 0.3s' }}>
              P1 Color: {p1Color || 'Open'}
            </span>
          </div>
          <div>
            <span style={{ fontWeight: currentPlayer === 2 ? 'bold' : 'normal', color: currentPlayer === 2 ? '#ff003c' : '#fff', transition: 'color 0.3s' }}>
              CPU Color: {p2Color || 'Open'}
            </span>
          </div>
        </div>
      </div>
      
      {/* Spin Control UI - Mobile Friendly */}
      {currentPlayer === 1 && gameStatus === 'playing' && (
        <div style={{
          position: 'absolute',
          bottom: '24px',
          right: '24px',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          backgroundColor: '#fff',
          boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
          zIndex: 15,
          cursor: 'pointer',
          border: '2px solid #ccc',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onPointerDown={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
          const y = ((e.clientY - rect.top) / rect.height) * 2 - 1
          // Clamp within circle
          if (x*x + y*y <= 1.2) setSpin({ x, y })
        }}
        onPointerMove={(e) => {
          if (e.buttons !== 1) return
          const rect = e.currentTarget.getBoundingClientRect()
          const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
          const y = ((e.clientY - rect.top) / rect.height) * 2 - 1
          if (x*x + y*y <= 1) setSpin({ x, y })
        }}
        >
          {/* Crosshair */}
          <div style={{ position: 'absolute', width: '100%', height: '1px', backgroundColor: '#eee' }} />
          <div style={{ position: 'absolute', height: '100%', width: '1px', backgroundColor: '#eee' }} />
          
          {/* Spin Indicator Dot */}
          <div style={{
            position: 'absolute',
            width: '12px',
            height: '12px',
            backgroundColor: '#f00',
            borderRadius: '50%',
            transform: `translate(${spin.x * 34}px, ${spin.y * 34}px)`
          }} />
        </div>
      )}

      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', backgroundColor: '#000', cursor: 'crosshair', position: 'relative' }}>
        <div ref={containerRef} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', touchAction: 'none' }} />
        
        {gameStatus !== 'playing' && (
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 20
          }}>
            <h1 style={{ color: gameStatus.includes('won') ? '#00ffcc' : '#ff003c', fontSize: '3rem', margin: '0 0 20px 0', textTransform: 'uppercase' }}>
              {message}
            </h1>
            <button 
              onClick={() => useGameStore.getState().resetGame()}
              style={{
                padding: '12px 24px',
                fontSize: '1.2rem',
                backgroundColor: '#fff',
                color: '#000',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
