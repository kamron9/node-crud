const express = require("express");
const mongoose = require('mongoose')
const postRouter = require('./routes/postRouter.js')
const fileUpload = require('express-fileupload')
require('dotenv').config()


const app = express();
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', postRouter)



const startApp = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true, useUnifiedTopology:true})
    app.listen(process.env.PORT, () => console.log("server running"));
  } catch (error) {
    console.log(error);
  }
};
startApp()
