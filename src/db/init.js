import mongoose from 'mongoose'

export function initDatabase() {
  // eslint-disable-next-line no-undef
  const DATABASE_URL = process.env.DATABASE_URL

  mongoose.connection.on('open', () => {
    console.info('successfully connected to database:', DATABASE_URL)
  })

  const connection = mongoose.connect(DATABASE_URL)
  return connection
}
