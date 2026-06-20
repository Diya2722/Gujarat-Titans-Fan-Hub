# Gujarat Titans — Official Fan Hub 🦁

A premium, immersive fan website for Gujarat Titans (IPL), built with React 19, Vite, Tailwind CSS, React Router v7, Framer Motion, and Lucide Icons.

## Tech Stack
- React 18+ (Vite)
- Tailwind CSS
- React Router v6/7
- Framer Motion (animations)
- Lucide React (icons)

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

To build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar/         # Sticky responsive navbar with dark mode toggle
│   ├── Hero/            # Full-screen rotating hero with live ticker
│   ├── Matches/         # Upcoming matches + recent results
│   ├── Players/         # Squad grid, filters, hover cards, profile modal
│   ├── Stats/           # Animated counters, progress bars, head-to-head
│   ├── News/            # News cards with category filters
│   ├── FanZone/         # Polls, fan wall, anthem player, join form, socials
│   ├── Gallery/         # Photo/video gallery with lightbox
│   └── Footer/          # Footer with links and contact info
├── pages/                # Route-level pages
├── data/                 # Mock data (players, matches, news)
├── hooks/                 # useCountUp custom hook
├── App.jsx                # Routing
├── main.jsx
└── index.css              # Tailwind + custom utility classes
```

## Notes
- Player images use placeholder.co images labeled with real player names — swap with official photography for production.
- Colors follow the official GT palette: Navy Blue (#002D62), Red (#E30613), Gold (#FFD700), White.
- This is an unofficial fan-made concept site, not affiliated with Gujarat Titans or BCCI/IPL.
# Gujarat-Titans-Fan-Hub
