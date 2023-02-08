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
const authRouter = require('./routes/auth.route')
const postRouter = require('./routes/post.route')
const commentRouter = require('./routes/comment.route')

mongoose.connect(process.env.DATABASE_CONNECT,{useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
  console.log("mongodb error", err)
  console.log('connected database successfully')
})
// middleware
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan("common"))

app.use('/api/user', userRouter)
app.use(authRouter)
app.use('/api/post', postRouter)
app.use('/api/comment', commentRouter)


app.get('/', (req, res) => {
  res.send('awesome, server is running perfectly')
})

app.listen(port, () => {
  console.log('wow server is connected', port)
})
