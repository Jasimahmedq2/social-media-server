const express = require('express');
const app = express()
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');
const port = process.env.PORT || 9000;
dotenv.config()
const userRouter = require('./routes/user.route')

mongoose.connect(process.env.DATABASE_CONNECT,{useNewUrlParser: true, useUnifiedTopology: true, strictQuery: true}, () => {
  console.log('connected database successfully')
})
// middleware
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan("common"))

app.use('/user', userRouter)


app.get('/', (req, res) => {
  res.send('awesome, server is running perfectly')
})

app.listen(port, () => {
  console.log('wow server is connected', port)
})
