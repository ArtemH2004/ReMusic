import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import userRouter from './routes/UserRoutes.js';

const PORT = 8081;
const app = express()

app.use(express.json())
app.use(express.static('uploads'))
app.use(fileUpload())
app.use(cors())

app.use('/api', userRouter)

async function startApp () {
    try {
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    }
    catch (err) {
        console.log(err);
    }
}

startApp()
