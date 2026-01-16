import { createFileRoute } from '@tanstack/react-router'
import { ThemeToggle } from '@/components/theme-toggle'
import {
  SiElectron,
  SiReact,
  SiTailwindcss,
  SiVite,
} from 'react-icons/si'
import { TbRoute } from 'react-icons/tb'
import { trpc } from '@/lib/trpc'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const { data } = trpc.health.useQuery()
  console.log('tRPC health:', data)
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background text-foreground transition-colors duration-300 selection:bg-primary selection:text-primary-foreground">
      {/* Background Gradients & Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]" />
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />

      <div className="absolute right-4 top-4 z-50">
        <ThemeToggle />
      </div>

      <div className="flex flex-col items-center gap-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
            Build Desktop Apps with{' '}
            <span className="bg-gradient-to-br from-blue-600 to-teal-400 bg-clip-text text-transparent dark:from-blue-400 dark:to-teal-300">
              React
            </span>
          </h1>
          <p className="mx-auto max-w-md text-lg font-medium text-muted-foreground sm:text-xl md:max-w-2xl">
            A production-ready template powered by the modern web ecosystem.
            Type-safe, fast, and beautiful out of the box.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground/60">
            Powered by
          </p>
          <div className="flex items-center gap-6 rounded-full border border-border/50 bg-background/50 px-8 py-4 shadow-lg backdrop-blur-xl transition-all hover:border-border hover:bg-background/80 hover:shadow-xl">
            <SiReact
              className="size-10 text-[#61DAFB] transition-transform duration-500 hover:scale-110 motion-safe:animate-spin motion-safe:[animation-duration:10s]"
              title="React"
            />
            <SiElectron
              className="size-10 text-[#47848F] transition-transform duration-300 hover:rotate-12 hover:scale-110"
              title="Electron"
            />
            <SiVite
              className="size-10 text-[#646CFF] transition-transform duration-300 hover:scale-110 hover:-skew-x-6"
              title="Vite"
            />
            <SiTailwindcss
              className="size-10 text-[#06B6D4] transition-transform duration-300 hover:scale-110 hover:skew-y-6"
              title="Tailwind CSS"
            />
            <TbRoute
              className="size-10 text-green-500 transition-transform duration-300 hover:scale-110 motion-safe:animate-pulse"
              title="TanStack Router"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
