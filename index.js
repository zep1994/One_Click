const path = require('path')
const express = require('express')

const app = express()

app.use('/', (req, res, next) => {
    res.sendFile(__dirname + '\\index.html')
})

app.listen(3001)