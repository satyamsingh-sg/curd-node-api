require('dotenv').config()
const express = require('express');
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const Db = require('./config/mongo.connection')
Db()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  
const routers = require("./routes/route")
app.use("/user", routers);

app.listen(3001,()=>{
    console.log(`Server is running on ${process.env.PORT}`);
})

  