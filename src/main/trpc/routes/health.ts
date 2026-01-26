import { trpc } from '../trpc'

export const health = trpc.procedure.query(() => ({ status: 'ok' }))
