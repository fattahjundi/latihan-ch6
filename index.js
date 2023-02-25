const express = require('express')
const app = express()
const port = 3000
const pokeRoute = require('./routes/pokeRoute')

app.use('/pokemon', pokeRoute)

app.listen(port, ()=>{console.log(`listen to ${port}`)})