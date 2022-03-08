const express = require("express");
const serverless = require("serverless-http");
const userRoute = require("./router/appointment")
const appointmentRoute = require("./router/appointment")
const doctorsRoutes = require("./router/doctor")
//creating middleware here
const app = express();
//cors policy
const cors = require("cors")
require("dotenv").config()
require("./db/db")

app.use(cors())
//using to router as middleware
  app.use("/.netlify/functions/api", userRoute)
  app.use("/.netlify/functions/api", appointmentRoute)
  app.use("/.netlify/functions/api", doctorsRoutes)
  app.use("",(req,res, next)=>{
      res.status(400).json({
          msg:"Url Not Found!"
      })
      next()
  })
app.use(express.json())
  app.listen(4000, ()=>{
      console.log("setver is runnig")
  })

  module.exports = app;
  module.exports.handler = serverless(app);