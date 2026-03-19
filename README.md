# English Pool
A seamless, mobile-first English 8-Ball Pool simulator built for the browser.

Play live: [https://pool-ochre.vercel.app](https://pool-ochre.vercel.app)

## Features
- **Responsive & Mobile-First:** Runs smooth on phones with proper touch controls and `navigator.vibrate` haptics.
- **Physics Engine:** Custom 2D rigid body collision logic built entirely in math without external physics libraries, ensuring lightweight performance.
- **English 8-Ball Rules:** Real state-machine based rules powered by Zustand. Correct foul logic (e.g. potting the white ball causes an "In-off"), turn carrying, table open/closed state, and black ball win/loss conditions.
- **AI Opponent:** Single-player mode against a CPU that automatically evaluates the table state, targets its assigned colors, and calculates trajectory.
- **Spin Controls:** Apply english (spin) via a visual touch controller to alter bounce angles off cushions.
- **Procedural Audio:** Ball clacks generated dynamically with Web Audio API based on impact velocity.

## Stack
- React 18
- Vite
- TypeScript
- Pixi.js (v8)
- Zustand

## Local Development
```bash
# Clone the repository
git clone https://github.com/joooord/pool.git

# Install dependencies
npm install

# Start the dev server
npm run dev
```

## Build
```bash
npm run build
```

## License
MIT
