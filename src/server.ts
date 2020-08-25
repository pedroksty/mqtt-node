import express from 'express'
import router from './routes'

export const myIp = '192.168.1.5'

const app = express()

app.use(router)

app.use(express.json())
