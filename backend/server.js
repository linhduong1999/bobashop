const { createSocket } = require('dgram');
const express = require('express')
const products = require('./data/products')
//const mongoose = require('mongoose');

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running')
})

app.get('/api/products/:id', (req, res) => {
    const product= products.find(p => p._id === req.params.id)
    res.json(product)
})

const port = process.env.PORT || 5001;
app.listen(port, ()=> {
    console.log(`Listening for genre on port ${port}...`)
})