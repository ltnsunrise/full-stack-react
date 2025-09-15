import { app } from './app.js'
import dotenv from 'dotenv'
import { initDatabase } from './db/init.js'

dotenv.config()

try {
  await initDatabase()
  // eslint-disable-next-line no-undef
  const PORT = process.env.PORT || 3000
  app.listen(PORT)
  console.info(`express server running on http://localhost:${PORT}`)
} catch (error) {
  console.error('failed to start server', error)
}
