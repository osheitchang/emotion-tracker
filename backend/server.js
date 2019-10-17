const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require('path')

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
// console.log("This is process >>>>>>>", process)
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("Mongoose database connection succesfully");
});

app.use(express.static(path.join(__dirname, '../frontend/build')))


// MAKE SURE THIS IS ABOVE YOUR CORS CONFIG

const exercisesRouter = require('./routes/excercises');
const usersRouter = require('./routes/users');

// Set "Access-Control-Allow-Origin" header

//MAKE SURE THE ROUTES ARE ABOVE THIS TO AVOID CORS ERROR

app.use(
  cors({
    origin: (origin, cb) => {
      cb(null, true)
    },
    optionsSuccessStatus: 200,
    credentials: true,
  })
  )
  
  app.use('/exercises',  exercisesRouter);
  app.use('/users', usersRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
