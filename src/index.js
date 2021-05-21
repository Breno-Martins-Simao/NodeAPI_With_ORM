//Import App Modules
const routes = require('./routes')
//Dependences and Definitions
const express = require('express')
const port = 3000
const app = express()


routes(app)


app.listen(port, () => console.log(`Server running on port ${port}`))

module.exports = app