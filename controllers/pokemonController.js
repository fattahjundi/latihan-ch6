const fetch = require('node-fetch')
const { Pokemon } = require('../models/index')
const apiData = {
    url: 'https://pokeapi.co/api/v2',
    type: 'pokemon'
}
const {url, type} = apiData
const apiUrl = `${url}/${type}`

function findPokemonByIdFromPokeApi(req, res) {
    fetch(`${apiUrl}/${req.params.id}`)
    .then(data => data.json())
    .then(result => {
        res.send(result)
    }).catch(err => res.status(500).send(err))
}

function findPokemonById(req, res) {
    Pokemon.findOne({
        where: {id: req.params.id}
    })
    .then(result => {
        res.status(200).json({
            status: 200,
            message: 'success get all pokemon data',
            data: result
        })
    }).catch(err => res.status(500).send(err))
}

function findAllPokemon(req, res) {
    Pokemon.findAll()
    .then(result => {
        res.status(200).json({
            status: 200,
            message: 'success get all pokemon data',
            data: result
        })
    }).catch(err => res.status(500).send(err))
}

function addPokemonById(req, res) {
    fetch(`${apiUrl}/${req.params.id}`)
    .then(data => data.json())
    .then(result => {
        Pokemon.create({
            name: result.forms[0].name,
            hit: result.stats[1].base_stat,
            hp: result.stats[0].base_stat
        }).then(result2 => {
            res.status(200).json({
                status: 200,
                message: 'success insert pokemon data',
                data: result2
            })
        }).catch(err => res.status(500).send(err))
    })
}

module.exports = {
    findPokemonByIdFromPokeApi,
    findPokemonById,
    findAllPokemon,
    addPokemonById
}