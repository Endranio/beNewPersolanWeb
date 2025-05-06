import express from 'express'
import Router from './routes/index'
import { errorHandler } from './middlewares/error-middleware'
import cors from 'cors'

const app = express()
const port = 5000
app.use(cors({
    origin:[
        "http://localhost:3000"
    ]
}))

app.use(express.json())

app.get("/",(req,res)=>{
 res.send("hello world")   
})

app.use(Router)
app.use(errorHandler)


app.listen(port,()=>{
    console.log(`port berjalan di ${port}`)
})
