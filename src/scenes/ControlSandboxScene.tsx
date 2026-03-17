export function ControlSandboxScene() {
  return (
    <div className="scene">
      <h1>Control Lab</h1>
      <p>
        This is where the touch + camera prototypes will live. For now it just outlines the plan:
      </p>
      <ul>
        <li>Single-finger aim / pull-back gesture with tension feedback.</li>
        <li>Precision wheel for sub-degree aim adjustments.</li>
        <li>Camera rail playback for pre-shot preview and post-shot replays.</li>
      </ul>
      <p>Coming soon: interactive SVG mock to fine-tune gestures before hooking up physics.</p>
    </div>
  )
}
