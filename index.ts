import express from 'express'
import Router from './routes/index'

const app = express()
const port = 5000
app.use(express.json())

app.get("/",(req,res)=>{
 res.send("hello world")   
})

app.use(Router)

app.listen(port,()=>{
    console.log(`port berjalan di ${port}`)
})