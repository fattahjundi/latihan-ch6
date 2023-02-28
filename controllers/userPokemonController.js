const { User_Pokemon } = require('../models/index')

function findPokemonByUserId(req, res) {
    User_Pokemon.findAll({
        attributes: ['id', 'UserId', 'PokemonId'],
        include: [
            {
                association: User_Pokemon.User,
                attributes: ['username']
            },
            {
                association: User_Pokemon.Pokemon,
                attributes: ['name']
            }
        ],
        where: {UserId: req.params.id}
    })
    .then(result => {
        res.status(200).json({
            status: 200,
            message: `success get pokemons`,
            data: result
        })
    }).catch(err => res.status(500).send(err))
}

function findAllUserPokemon(req, res) {
    User_Pokemon.findAll()
    .then(result => {
        res.status(200).json({
            status: 200,
            message: 'success get all user_pokemon data',
            data: result
        })
    }).catch(err => res.status(500).send(err))
}

function addUserPokemon(req, res) {
    User_Pokemon.create({
        UserId: req.body.UserId,
        PokemonId: req.body.PokemonId
    }).then(result => {
        res.status(200).json({
            status: 200,
            message: 'success insert user_pokemon data',
            data: result
        })
    }).catch(err => res.status(500).send(err))
}

function deleteUserPokemonById(req, res) {
    User_Pokemon.destroy({
        where: {id: req.params.id}
    }).then(result => {
        res.status(200).json({
            status: 200,
            message: 'success delete a user_pokemon data',
            data: result
        })
    }).catch(err => res.status(500).send(err))
}

module.exports = {
    findPokemonByUserId,
    findAllUserPokemon,
    addUserPokemon,
    deleteUserPokemonById
}