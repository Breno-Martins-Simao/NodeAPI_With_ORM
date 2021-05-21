const { Router }  = require('express')
const PessoaController = require('../controllers/PersonController')

const router = Router()

router.get('/showAllPeople', PessoaController.showAllPeople)
router.get('/person/:id', PessoaController.findPerson)

router.post('/person', PessoaController.createPerson)
router.put('/person/:id', PessoaController.updatePerson)
module.exports = router