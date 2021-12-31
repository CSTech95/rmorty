const express = require('express')
const router = require('./routes')
const app = express()

require('dotenv').config()
const port = process.env.PORT


app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})