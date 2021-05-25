const { Router } = require('express')
const LevelsController = require('../controllers/LevelsController')

const router = Router()
router
 .get('/levels', LevelsController.showAllLevels)
 .get('/levels/:id', LevelsController.findLevel)
 .post('/levels', LevelsController.createLevel)
 .put('/levels/:id', LevelsController.updateLevel)
 //.delete('/niveis/:id', NivelController.apagaNivel)

module.exports = router