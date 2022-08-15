import { setupCache } from 'axios-cache-adapter'

export const httpCacheAdapter = setupCache({
  maxAge: 60 * 60 * 1000, // 1 hour
}).adapter