const { Router }  = require('express')
const PersonController = require('../controllers/PersonController')

const router = Router()

router.get('/person', PersonController.showAllPeople)
router.get('/person/:id', PersonController.findPerson)
router.post('/person', PersonController.createPerson)
router.put('/person/:id', PersonController.updatePerson)
router.delete('/person/:id', PersonController.deletePerson)


router.get('/person/:student_id/enrollment/:enrollment_Id', PersonController.findEnrollment)
router.post('/person/:student_id/enrollment', PersonController.createEnrollment)
router.put('/person/:student_id/enrollment/:enrollment_Id', PersonController.updateEnrollment)
router.delete('/person/:student_id/enrollment/:enrollment_Id', PersonController.deleteEnrollment)

module.exports = router