import express from 'express';
import connectDB from './db/connectdb.js';
import web from './routes/web.js';
const app = express();
const port = process.env.PORT || '8008'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://pavithrasreedhar03:v7YqEiRxovJYunI2@cluster0.avth4qt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


//Database Connection

connectDB(DATABASE_URL)


app.use(express.urlencoded({
    extended: true
}))

app.use(express.static('public')); 
app.use('/images', express.static('images'))


//Set Template Engine
app.set('view engine', 'ejs')

//Load Routes
app.use('/', web)

app.listen(port, () => {
    console.log(`Server listening at https://localhost:${port}`)
})