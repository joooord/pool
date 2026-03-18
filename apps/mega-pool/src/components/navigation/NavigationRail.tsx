import classNames from 'classnames'
import './NavigationRail.css'

export type SceneId = 'home' | 'sandbox' | 'table'

const ITEMS: { id: SceneId; label: string; hint: string }[] = [
  { id: 'home', label: 'Briefing', hint: 'Vision, roadmap, progress' },
  { id: 'sandbox', label: 'Control Lab', hint: 'Prototype touch + camera work' },
  { id: 'table', label: 'Table View', hint: 'Gameplay viewport placeholder' },
]

interface Props {
  active: SceneId
  onChange: (scene: SceneId) => void
}

export function NavigationRail({ active, onChange }: Props) {
  return (
    <nav className="nav-rail">
      {ITEMS.map((item) => (
        <button
          key={item.id}
          className={classNames('nav-rail__item', { 'is-active': item.id === active })}
          onClick={() => onChange(item.id)}
        >
          <span className="nav-rail__label">{item.label}</span>
          <span className="nav-rail__hint">{item.hint}</span>
        </button>
      ))}
    </nav>
  )
}
