const express = require('express')
const router = require('./routes')
const app = express()

require('dotenv').config()
const port = process.env.PORT


app.use(express.urlencoded({extended:false}));
app.use(router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})