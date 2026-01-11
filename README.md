# React Electron Template

A modern Electron starter template with the latest technologies, pre-configured and ready to use.

## Why This Template?

Setting up a modern Electron app with current best practices is **unnecessarily painful**. You need to:

- Configure Electron Forge with Vite
- Set up React 19 with TypeScript
- Integrate TailwindCSS v4 (new CSS-first config)
- Add file-based routing
- Configure path aliases
- Set up dark mode theming
- Add UI components

This template does all of that for you. Clone it and start building.

## Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| **Runtime** | Electron | 39.x |
| **Framework** | React | 19.x |
| **Language** | TypeScript | 5.x |
| **Bundler** | Vite | 5.x |
| **Build Tool** | Electron Forge | 7.x |
| **Styling** | TailwindCSS | 4.x |
| **Routing** | TanStack Router | 1.x |
| **UI Components** | shadcn/ui | latest |
| **Icons** | Lucide React | latest |

## Features

- **Dark Mode** - System-aware theme with light/dark/system toggle
- **File-Based Routing** - Just create files in `src/routes/`
- **Path Aliases** - Use `@/` or `~/` for clean imports
- **shadcn/ui Ready** - Pre-configured, just add components
- **Cross-Platform Builds** - Windows, macOS, Linux out of the box
- **Hot Reload** - Fast development with Vite HMR

## Quick Start

```bash
# Clone the template
git clone https://github.com/yourusername/react-electron-template.git my-app
cd my-app

# Install dependencies
bun install

# Start development
bun start
```

## Project Structure

```
src/
├── main.ts                 # Electron main process
├── preload.ts              # Preload script (IPC bridge)
├── renderer.tsx            # React entry point
├── routeTree.gen.ts        # Auto-generated route tree
├── routes/
│   ├── __root.tsx          # App layout (like App.tsx)
│   └── index.tsx           # Home page (/)
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── theme-provider.tsx  # Dark mode context
│   └── theme-toggle.tsx    # Theme switcher
├── lib/
│   └── utils.ts            # Utility functions (cn, etc.)
└── styles/
    └── global.css          # Tailwind + theme variables
```

## Adding Routes

Create a file in `src/routes/` and it becomes a route:

```tsx
// src/routes/settings.tsx → /settings
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings')({
  component: Settings,
})

function Settings() {
  return <div>Settings Page</div>
}
```

Nested routes:
```
src/routes/settings/index.tsx    → /settings
src/routes/settings/profile.tsx  → /settings/profile
```

## Adding shadcn/ui Components

```bash
bunx --bun shadcn@latest add button
bunx --bun shadcn@latest add card dialog input
```

## Scripts

| Command | Description |
|---------|-------------|
| `bun start` | Start development with hot reload |
| `bun run package` | Package app for current platform |
| `bun run make` | Create distributable installers |
| `bun run lint` | Run ESLint |

## Building for Production

```bash
# Package for current platform
bun run package

# Create installers (.deb, .rpm, .exe, .dmg)
bun run make
```

Output will be in the `out/` directory.

## Mapping to Regular React

If you're coming from a standard React project:

| Regular React | This Template |
|--------------|---------------|
| `src/main.tsx` | `src/renderer.tsx` |
| `src/App.tsx` | `src/routes/__root.tsx` |
| `src/pages/Home.tsx` | `src/routes/index.tsx` |
| `src/pages/About.tsx` | `src/routes/about.tsx` |

The key difference: **file location = route path** (no manual route config needed).

## Configuration Files

- `forge.config.ts` - Electron Forge configuration
- `vite.main.config.ts` - Vite config for main process
- `vite.renderer.config.ts` - Vite config for renderer
- `vite.preload.config.ts` - Vite config for preload
- `tsconfig.json` - TypeScript configuration
- `components.json` - shadcn/ui configuration

## License

MIT
