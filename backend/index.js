import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import userRouter from './routes/UserRoutes.js';
import songRouter from './routes/SongRoutes.js';
import albumRouter from './routes/AlbumRoutes.js';
import reviewRouter from './routes/ReviewRoutes.js';

const PORT = 8081;
const app = express()

app.use(express.json())
app.use(express.static('uploads'))
app.use(fileUpload())
app.use(cors())

app.use('/api', userRouter)
app.use('/api', songRouter)
app.use('/api', albumRouter)
app.use('/api', reviewRouter)

async function startApp () {
    try {
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    }
    catch (error) {
        console.log(error);
    }
}

startApp()
