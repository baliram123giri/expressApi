const express = require("express");
const serverless = require("serverless-http");
const user = require("./router/user")
const app = express();

app.use("/.netlify/functions/api", user)
app.use(express.json())
// const router = express.Router();


// app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
