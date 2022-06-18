import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import authRouter from './routes/auth.js'
import 'dotenv/config'

const app = express()
const PORT = process.env.BACKEND_PORT
const DB = process.env.DB_URI

app.use(express.json())
app.use(cors())
app.use('/auth', authRouter)

main().catch(err => console.log(err));

async function main() {
  app.listen(PORT, () => {
    console.log('Server started')
  })
  await mongoose.connect(DB);
  console.log('Connected to MongoDB');
}
