export function HomeScene() {
  return (
    <div className="scene">
      <h1>Welcome to Mega</h1>
      <p>
        Mobile-first, premium English pool. This screen will evolve into a live production brief showing build
        progress, blockers, and links to the latest playable builds.
      </p>

      <section>
        <h2>Build Pillars</h2>
        <ul>
          <li>Apple Arcade-level camera work and motion.</li>
          <li>One-hand touch controls with pro-level precision options.</li>
          <li>Authentic English 8-ball rules + physics.</li>
        </ul>
      </section>

      <section>
        <h2>Next Up</h2>
        <ol>
          <li>Interaction sandbox for control + camera prototyping.</li>
          <li>Physics kernel spike inside PixiJS render loop.</li>
          <li>Rule engine scaffolding + config (World Rules vs Blackball variants).</li>
        </ol>
      </section>
    </div>
  )
}
