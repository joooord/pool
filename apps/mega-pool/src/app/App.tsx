import { type ReactNode, useState } from 'react'
import { AppShell } from '../components/layout/AppShell'
import { NavigationRail, type SceneId } from '../components/navigation/NavigationRail'
import { HomeScene } from '../scenes/HomeScene'
import { ControlSandboxScene } from '../scenes/ControlSandboxScene'
import { TableScene } from '../scenes/TableScene'

const SCENE_MAP: Record<SceneId, ReactNode> = {
  home: <HomeScene />,
  sandbox: <ControlSandboxScene />,
  table: <TableScene />,
}

export default function App() {
  const [scene, setScene] = useState<SceneId>('home')

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
      {SCENE_MAP[scene]}
    </AppShell>
  )
}
