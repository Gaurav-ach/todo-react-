import express from 'express';
import db from './db.js'
import TodoRouter from './routes/todo.route.js'
import cors from 'cors'

const app=express();
app.use(express.static('./uploads'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({}))

app.use('/api',TodoRouter)

app.listen(8880,()=>{
    console.log("runing server")
})