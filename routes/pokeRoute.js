const express = require('express')
const router = express.Router()
const pokeapi = require('pokeapi')
const api = pokeapi.v1()

router.get('/', (req, res) => {
    api.get('pokemon', 1).then(result => {
        console.log(result);
        res.send(result)
    })
    .catch(err => { console.log(err) })
})

module.exports = router