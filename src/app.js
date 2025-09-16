import express from 'express'
import { postsRoutes } from './routes/posts.js'
import cors from 'cors'
import bodyParser from 'body-parser'
import { usersRoutes } from './routes/users.js'

const app = express()
app.use(cors())
app.use(bodyParser.json())
postsRoutes(app)
usersRoutes(app)
app.get('/', (req, res) => res.send('Hello World'))

export { app }
