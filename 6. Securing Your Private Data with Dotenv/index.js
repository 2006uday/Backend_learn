require('dotenv').config();
const express = require('express');
const routes = require('./routes/route');
const connectDb = require('./utils/db.js')
const app = express();
const PORT = 3000;
connectDb()

app.use(express.json());

app.use('/',routes);

app.get('/',(req,res) => {
    res.send("<h1>home page </h1>")
});

app.listen(PORT, ()=>{
    console.log("server is starting");
});
