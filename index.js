const express = require('express')
const router = require('./routes')
const app = express()
const cors = require("cors");

require('dotenv').config()
const port = process.env.PORT

// app.use(cors());
app.use(require('cors')());
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.disable("x-powered-by")
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})