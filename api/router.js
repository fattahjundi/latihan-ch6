const router = require('express').Router()
const userRoute = require('../routes/userRoute')
const pokemonRoute = require('../routes/pokemonRoute')
const userPokemonRoute = require('../routes/userPokemonRoute')

app.use('/pokemon', pokeRoute)
app.use('/user', userRoute)
app.use('/userpoke', userPokemonRoute)

module.exports = router