import { readFileSync } from 'node:fs'
import { createServer } from 'node:http'

const server = createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(readFileSync('backend/users.json'))
})

const PORT = 3000

const HOSTNAME = 'localhost'

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`)
})
