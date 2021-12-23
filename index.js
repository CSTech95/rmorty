const express = require('express')
// const { default: knex } = require('knex')
// const router = express.Router()
const knexfile = require('./db/knexfile')
// const knex = require('knex')
const router = require('./routes/user-routes')
const app = express()

require('dotenv').config()
const port = process.env.PORT


app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.use(router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})