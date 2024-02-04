import express, { Express, Request, Response } from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import notesRouter from './notes/notes.router'

dotenv.config()

const app: Express = express()
const port = process.env.PORT


// Initialize somewhere the file to be read.

// Middleware
app.use(express.json())
app.use(morgan('combined'));

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server')
})

// Routers
app.use('/api/notes/', notesRouter)

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})