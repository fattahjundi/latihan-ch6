const router = require('express').Router()
const userRoute = require('../routes/userRoute')
const pokemonRoute = require('../routes/pokemonRoute')
const userPokemonRoute = require('../routes/userPokemonRoute')

router.use('/pokemon', pokemonRoute)
router.use('/user', userRoute)
router.use('/userpoke', userPokemonRoute)

module.exports = router