import { inferRouterInputs, inferRouterOutputs } from '@trpc/server'
import { trpc } from './trpc'

export const appRouter = trpc.router({
  health: trpc.procedure.query(() => ({ status: 'ok' })),
})

export type AppRouter = typeof appRouter
export type RouterInputs = inferRouterInputs<AppRouter>
export type RouterOutputs = inferRouterOutputs<AppRouter>
