import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import notesRouter from './notes/notes.router'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

// Middleware
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server')
})

// Routers
app.use('/api/notes/', notesRouter)

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})
