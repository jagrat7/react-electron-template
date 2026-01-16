import { createTRPCReact } from '@trpc/react-query'
import { ipcLink } from 'trpc-electron/renderer'
import { QueryClient } from '@tanstack/react-query'
import type { AppRouter } from '../../main/trpc/router'

export const trpc = createTRPCReact<AppRouter>()

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
    },
  },
})

export const trpcClient = trpc.createClient({
  links: [ipcLink()],
})
