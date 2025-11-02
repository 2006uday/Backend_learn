const express = require('express')
const PORT = 5000
const app = express()
const routes = require('./routes/route')

app.use(express.json())
app.use('/', routes)


app.get('/', (req, res) => {
    res.send('<h1>Home page</h1>')
})

app.get('/menu', (req, res) => {
    res.send('<h1>Menu page.</h1>')
})

app.listen(PORT, () => {
    console.log('server is start ', PORT)
})