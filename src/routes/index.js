const express = require('express')
const peopleRouter = require('./peopleRoute')

module.exports = (app) =>{
    app.use(express.json())
    app.use(express.urlencoded({ extended: true}))

    //Adding Routes from People controller
    app.use(peopleRouter)
}