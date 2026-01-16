import { initTRPC } from '@trpc/server'
import { createTrpcContext } from './context'

export const trpc = initTRPC.context<typeof createTrpcContext>().create()
