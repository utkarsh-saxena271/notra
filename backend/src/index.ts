import express from 'express'
import { config } from './config/env.config.js'
import cookieParser from 'cookie-parser';
import errorHandler from './middlewares/error.middleware.js';
import authRouter from './routes/auth.routes.js'
import userRouter from './routes/user.routes.js'
import noteRouter from './routes/note.routes.js'


const app = express();
const port = config.PORT;


app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/note', noteRouter)


app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`)
})