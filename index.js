const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const morgan = require('morgan')
const helmet = require('helmet')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')


const app = express()


dotenv.config()

mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true}, console.log(`MongoDB Connected`))




//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute)







app.listen(8000, ()=> {
    console.log("Backend server is running!!")
})