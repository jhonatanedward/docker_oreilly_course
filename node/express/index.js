const express = require('express')
const process = require('process')
const app = express()

process.on('SIGINT', () => {
    console.log('Application is beeing interrupted...')
    process.exit(0)
})

process.on('SIGTERM', () => {
    console.log('Application is beeing terminated...')
    process.exit(0)
})

app.get('/', (req, res) => {
    res.send('This express app was executed by Node.js container insed of the Docker')
})

app.listen(3000)
