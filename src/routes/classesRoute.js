const { Router } = require('express')
const ClassesController = require('../controllers/ClassesController')

const router = Router()
router
 .get('/classes', ClassesController.showAllClasses)
 .get('/classes/:id', ClassesController.findClass)
 .post('/classes', ClassesController.createClass)
 .put('/classes/:id', ClassesController.updateClass)
 //.delete('/classes/:id', ClassesController.apagaTurma)
 
module.exports = router