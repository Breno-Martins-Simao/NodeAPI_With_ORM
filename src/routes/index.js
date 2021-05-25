const express = require('express')
const peopleRouter = require('./peopleRoute')
const classesRouter = require('./classesRoute')
const levelsRouter = require('./levelsRoutes')

module.exports = (app) =>{
    app.use(express.json())
    app.use(express.urlencoded({ extended: true}))

    app.use(
        peopleRouter,
        classesRouter,
        levelsRouter
    )
}