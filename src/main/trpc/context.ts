export type TrpcContext = {
  senderId?: number
}

export const createTrpcContext = ({ senderId }: TrpcContext = {}) => ({
  senderId,
})
