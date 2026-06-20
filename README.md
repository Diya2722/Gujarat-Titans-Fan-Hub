# 🦁 Gujarat Titans — Fan Hub

A premium, immersive fan website for the IPL franchise **Gujarat Titans**, built with React, Vite, and Tailwind CSS. Featuring smooth Framer Motion animations, a full squad explorer, live-style match schedules, stats dashboards, news, a fan zone, and a media gallery — all wrapped in the official GT navy, red & gold theme with light/dark mode support.

> ⚠️ This is an unofficial, fan-made concept project and is not affiliated with Gujarat Titans, BCCI, or the IPL.

---

## ✨ Features

- 🏠 **Home** — Full-screen rotating hero section with a live ticker
- 🧑‍🤝‍🧑 **Players** — Searchable/filterable squad grid with hover cards and detailed player profile modals
- 🏏 **Matches** — Upcoming fixtures and recent results
- 📊 **Stats** — Animated counters, progress bars, and head-to-head comparisons
- 📰 **News** — News cards with category filtering
- 🎉 **Fan Zone** — Polls, fan wall, anthem player, join form, and social links
- 🖼️ **Gallery** — Photo/video gallery with a lightbox viewer
- 🌗 **Dark/Light Theme Toggle** with a sticky responsive navbar
- 📱 Fully responsive across mobile, tablet, and desktop

## 🛠️ Tech Stack

| Category   | Tech                                  |
|------------|----------------------------------------|
| Framework  | React 18 (Vite)                        |
| Styling    | Tailwind CSS                           |
| Routing    | React Router v6                        |
| Animation  | Framer Motion                          |
| Icons      | Lucide React                           |
| Misc       | React CountUp, React Intersection Observer |

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar/      # Sticky responsive navbar with dark mode toggle
│   ├── Hero/         # Full-screen rotating hero with live ticker
│   ├── Matches/      # Upcoming matches + recent results
│   ├── Players/      # Squad grid, filters, hover cards, profile modal
│   ├── Stats/         # Animated counters, progress bars, head-to-head
│   ├── News/          # News cards with category filters
│   ├── FanZone/       # Polls, fan wall, anthem player, join form, socials
│   ├── Gallery/        # Photo/video gallery with lightbox
│   └── Footer/         # Footer with links and contact info
├── pages/              # Route-level pages
├── data/                # Mock data (players, matches, news)
├── hooks/                # useCountUp custom hook
├── App.jsx                # Routing
├── main.jsx
└── index.css               # Tailwind + custom utility classes
```

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

```bash
git clone https://github.com/Diya2722/gujarat-titans-website.git
cd gujarat-titans-website
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
npm run preview
```

## 🎨 Design

- **Color Palette:** Navy Blue `#002D62`, Red `#E30613`, Gold `#FFD700`, White
- Player images currently use placeholder graphics labeled with real player names — swap with official photography before any public/production use.

## 🤝 Contributing

This is a personal portfolio project, but suggestions and pull requests are welcome! Feel free to open an issue if you spot a bug or have an idea for an improvement.

## 📄 License

This project is open source and available for learning purposes. Not for commercial use — Gujarat Titans, IPL, and BCCI trademarks belong to their respective owners.

## 👩‍💻 Author

**Diya Prajapati**
- GitHub: [@Diya2722](https://github.com/Diya2722)
- LinkedIn: [Diya Prajapati](https://linkedin.com/in/diya-prajapati-258a27275)
