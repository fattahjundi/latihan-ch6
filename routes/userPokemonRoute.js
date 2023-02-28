const express = require('express')
const router = express.Router()
const { findPokemonByUserId, 
        findAllUserPokemon, 
        addUserPokemon,
        deleteUserPokemonById } = require('../controllers/userPokemonController')

router.get('/:id', findPokemonByUserId)
router.get('/', findAllUserPokemon)
router.post('/', addUserPokemon)
router.delete('/:id', deleteUserPokemonById)

module.exports = router