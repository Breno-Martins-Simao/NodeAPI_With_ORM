//Dependences and Definitions
const express = require('express')
const port = 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get('/test', (request, response) =>{
    response
        .status(200)
        .send({message:"Welcome"})
})

app.listen(port, () => console.log(`Server running on port ${port}`))

module.exports = {
    app
}