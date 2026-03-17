import type { PropsWithChildren, ReactNode } from 'react'
import './AppShell.css'

interface AppShellProps extends PropsWithChildren {
  headerSlot?: ReactNode
  navSlot?: ReactNode
}

export function AppShell({ headerSlot, navSlot, children }: AppShellProps) {
  return (
    <div className="app-shell">
      <header className="app-shell__header">{headerSlot}</header>
      <main className="app-shell__main">
        <section className="app-shell__content">{children}</section>
        <aside className="app-shell__nav">{navSlot}</aside>
      </main>
    </div>
  )
}
