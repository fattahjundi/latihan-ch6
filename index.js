const express = require('express')
const app = express()
const port = 3000
const router = require('./api/router')

// UNTUK METHOD GET AGAR DATA YG TAMPIL JADI JSON
app.use(express.json());
// UNTUK METHOD POST AGAR BISA AMBIL VALUE DARI INPUT FORM
app.use(express.urlencoded({ extended: true }));

app.use(router)

app.listen(port, ()=>{console.log(`listen to ${port}`)})