import { trpc } from '../trpc'

export const health = trpc.router({
  status: trpc.procedure.query(() => ({ status: 'ok' })),
})