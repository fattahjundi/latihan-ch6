const express = require('express')
const app = express()
const port = 3000
const pokeRoute = require('./routes/pokemonRoute')
const userRoute = require('./routes/userRoute')
const userPokemonRoute = require('./routes/userPokemonRoute')

// UNTUK METHOD GET AGAR DATA YG TAMPIL JADI JSON
app.use(express.json());
// UNTUK METHOD POST AGAR BISA AMBIL VALUE DARI INPUT FORM
app.use(express.urlencoded({ extended: true }));

app.use('/pokemon', pokeRoute)
app.use('/user', userRoute)
app.use('/userpoke', userPokemonRoute)

app.listen(port, ()=>{console.log(`listen to ${port}`)})