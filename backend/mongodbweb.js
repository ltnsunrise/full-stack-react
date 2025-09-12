import { createServer } from 'node:http'
import { MongoClient } from 'mongodb'

const url = 'mongodb://localhost:27017/'
const dbName = 'ch2'
const client = new MongoClient(url)

try {
  await client.connect()
  console.log('Connected successfully to server')
} catch (error) {
  console.error('Connection to MongoDB failed', error)
}

const server = createServer(async (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')

  const db = client.db(dbName)
  const collection = db.collection('users')
  const users = await collection.find({}).toArray()
  res.end(JSON.stringify(users))
})

const host = 'localhost'
const port = 3000
server.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`)
})
