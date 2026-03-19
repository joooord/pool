import { useState } from 'react'
import { AppShell } from '../components/layout/AppShell'
import { NavigationRail, type SceneId } from '../components/navigation/NavigationRail'
import { HomeScene } from '../scenes/HomeScene'
import { ControlSandboxScene } from '../scenes/ControlSandboxScene'
import { TableScene } from '../scenes/TableScene'
import { useGameStore } from '../store/gameStore'

export default function App() {
  const [scene, setScene] = useState<SceneId>('home')
  const gameKey = useGameStore(state => state.gameKey)

  const renderScene = () => {
    switch (scene) {
      case 'home': return <HomeScene />
      case 'sandbox': return <ControlSandboxScene />
      case 'table': return <TableScene key={gameKey} />
      default: return null
    }
  }

  return (
    <AppShell
      headerSlot={
        <div>
          <p style={{ opacity: 0.7, margin: 0 }}>Mega build — mobile-first English pool</p>
          <h1 style={{ margin: 0 }}>Developer console</h1>
        </div>
      }
      navSlot={<NavigationRail active={scene} onChange={setScene} />}
    >
      {renderScene()}
    </AppShell>
  )
}
