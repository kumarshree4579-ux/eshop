import express from 'express'
import EnvData from './config/EnvData.js';
import connectDb from './config/db.js';
import userRoute from './routes/userRoutes.js'
import CategoryRoute from './routes/CategoryRoute.js'
import ProductRoute from './routes/ProductRoute.js'
const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.send("API is running")
})


app.use('/api/user', userRoute)
app.use('/api/category', CategoryRoute)
app.use('/api/product', ProductRoute)

app.listen(EnvData.PORT, () => {
    {
        connectDb();
        console.log(`Server is running on PORT: ${EnvData.PORT}`)
    }
})