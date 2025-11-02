const express = require('express')
const connectDB = require('./utils/bd')
const app = express()
const PORT = 5000

app.use(express.json())

app.get('/', (req, res) => {
    res.send("<h1> server start </h1>")
});

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log('server is started port ', PORT)
    });
});