import {connectDatabase} from './config/connectDatabase.js'
import express from 'express'
import dotenv from 'dotenv'
// import cors from 'cors'
import userRoutes from './routes/user.route.js';

dotenv.config()
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// app.use(cors({
//     origin: process.env.CLIENT_URL,
//     methods: ["POST", 'GET', 'PUT', "DELETE"]
// }))
// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/users', userRoutes);
connectDatabase();


// Router app.Method(PATH, HANDLER)
app.get('/', (req, res) => {
  res.send('Hello World! Yeah')
})

app.listen(port, hostname, () => {
  console.log(` app listening on port ${port}`)
})