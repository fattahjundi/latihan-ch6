const express = require('express')
const router = express.Router()
const { findPokemonByIdFromPokeApi, 
        findPokemonById, 
        findAllPokemon, 
        addPokemonById } = require('../controllers/pokemonController')

router.get('/api/:id', findPokemonByIdFromPokeApi)
router.get('/:id', findPokemonById)
router.get('/', findAllPokemon)
router.post('/:id', addPokemonById)

module.exports = router