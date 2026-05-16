import express from 'express'
import { config } from './config/env.config.js'
import cookieParser from 'cookie-parser';


const app = express();
const port = config.PORT;


app.use(express.json())
app.use(cookieParser())



app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`)
})