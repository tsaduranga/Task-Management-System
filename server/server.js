import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import taskRoutes from './routes/taskRoutes.js'
import connectDB from './config/db.js'

// import env_datas from './datas.js'

connectDB()

const app = express()
app.use(express.json())


app.get('/', (req,res) => {
    res.json({
        name : "Thisaru Saduranga"
    })
})


app.use('/api/users', userRoutes)
app.use('/api/tasks', taskRoutes)

const port = process.env.PORT || 5000

app.listen( port , () => {
    console.log(`server start at ${port}`)
})