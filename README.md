# ggonz.com - Portfolio

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** TailwindCSS + ShadcnUI
- **Architecture:** Atomic Design
- **i18n:** next-intl (English, Portuguese, German)
- **Theming:** next-themes (System, Dark, Light)
- **Language:** TypeScript

## 📁 Project Structure

```
src/
├── app/
│   ├── [locale]/           # Locale-based routing
│   │   ├── layout.tsx      # Locale layout with providers
│   │   ├── page.tsx        # Home page
│   │   ├── about/          # About page
│   │   ├── experiences/    # Experiences list & detail pages
│   │   └── projects/       # Projects (Coming Soon)
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── components/
│   ├── atoms/              # Basic UI elements
│   ├── molecules/          # Composed components
│   ├── organisms/          # Complex components
│   ├── templates/          # Page layouts
│   ├── providers/          # Context providers
│   └── ui/                 # ShadcnUI components
├── i18n/                   # Internationalization config
├── lib/                    # Utilities and data
│   ├── experiences.ts      # Experience data
│   ├── github.ts           # GitHub API integration
│   └── utils.ts            # Helper functions
└── messages/               # Translation files
    ├── en.json
    ├── pt.json
    └── de.json
```

## 🏃 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📄 License

MIT License - Feel free to use this as a template for your own portfolio!