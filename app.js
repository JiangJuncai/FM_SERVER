const express = require('express')
const config = require('./config')

process.env.NODE_ENV = 'development'
const app = express()

app.get('/', (req, res) => {
  res.json('success')
})

app.listen(config.HOSTPORT, () => {
  console.log(`http://localhost:${config.HOSTPORT}`)
})
