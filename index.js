const express = require('express')
const router = require('./routes')
const app = express()
const cors = require("cors");
const path = require("path")

require('dotenv').config()
const PORT = process.env.PORT || 3000

app.use(cors());
// app.use(require('cors')());
app.use(express.json())
app.use(express.urlencoded({extended:false}));


app.disable("x-powered-by")
app.use(router)

if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "rmorty-client/build")))
}
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})