const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRouter = require('./controllers/auth');
const blogRouter = require('./controllers/blog');
const userRouter = require('./controllers/user')

dotenv.config();

const app = express();


app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB is successfully connected");
  })
  .catch((err) => {
    console.log("DB connection failed:", err);
  });

app.use('/auth', authRouter);
app.use('/blog', blogRouter);
app.use('/user', userRouter);

app.listen(5000, () => {
  console.log("Server is connected successfully");
});
