const database = require('../models')

class PersonController {
    //Static on a function enable to call the method without create an Object from this class
    static async showAllPeople(request, response) {
        try {
            const AllPeople = await database.People.findAll()
            return response.status(200).json(AllPeople)
        }catch(e){
            return response.status(500).json(e.message)
        }
    }

    static async findPerson (request, response){
        const { id } = request.params
        try {
            const person = await database.People.findOne({
                where:{
                    id:Number(id)
                }
            })
            return response.status(200).json(person)
        } catch(e){
            return response.status(500).json(e.message)
        }
    } 

    static async createPerson (request, response){
        const  newPerson = request.body
        try {
            const createdPerson = await database.People.create(newPerson)
            return response.status(200).json(createdPerson)
        } catch(e){
            return response.status(500).json(e.message)
        }
    }

    static async updatePerson(request, response){
        const { id } = request.params
        const  updtPerson = request.body
        try {
            await database.People.update(updtPerson,{ where: { id: Number(id) }})
            
            const updatedPerson = await database.People.findOne({
                where:{
                    id:Number(id)
                }
            })
            response.status(200).json(updatedPerson)
        } catch(e){
            return response.status(500).json(e.message)
        }
    }

    static async deletePerson(request, response){
        const {id} = request.params
        try{
            await database.People.destroy({where:{
                id:Number(id)
            }})
            return response.status(200).json({message:`ID <${id}> Deleted sucessfully`})
        }catch(error){
            return response.status(500).json(error.message)
        }
    }

    static async findEnrollment (request, response){
        const { student_id, enrollment_Id } = request.params
        try {
            const enrollment = await database.Enrollment.findOne({
                where:{
                    student_id:Number(student_id),
                    id:Number(enrollment_Id)
                }
            })
            return response.status(200).json(enrollment)
        } catch(e){
            return response.status(500).json(e.message)
        }
    } 

    static async createEnrollment (request, response){
        const { student_id } = request.params
        const  newEnrollment = {...request.body, student_id : Number(student_id)}
        try {
            const createdEnrollment = await database.Enrollment.create(newEnrollment)
            return response.status(200).json(createdEnrollment)
        } catch(e){
            return response.status(500).json(e.message)
        }
    }

    static async updateEnrollment (request, response){
        const { student_id, enrollment_Id } = request.params
        const updtEnrollment = request.body
        try {
            await database.Enrollment.update(updtEnrollment,{ where: { 
                id: Number(enrollment_Id),
                student_id: Number(student_id)
            }})
            
            const updatedEnrollment= await database.Enrollment.findOne({
                where:{
                    id:Number(enrollment_Id)
                }
            })
            response.status(200).json(updatedEnrollment)
        } catch(e){
            return response.status(500).json(e.message)
        }
    }

    static async deleteEnrollment(request, response){
        const { student_id, enrollment_Id } = request.params
        try{
            await database.Enrollment.destroy({where:{
                id:Number(enrollment_Id),
                student_id:Number(student_id)
            }})
            return response.status(200).json({message:`Enrollment ID <${enrollment_Id}> that includes stundet_id <${student_id}> Deleted sucessfully`})
        }catch(error){
            return response.status(500).json(error.message)
        }
    }
}

module.exports = PersonController