const express = require('express')
const route = require('./routes/route')
const app = express()
const PORT = 5000

app.use(express.json())

app.use('/',route)

app.get('/', (req, res) => {
    res.send('<h1>hello this is front page.</h1>')
})

app.listen(PORT, () => {
        console.log('server start port number is ', PORT)
    }
)