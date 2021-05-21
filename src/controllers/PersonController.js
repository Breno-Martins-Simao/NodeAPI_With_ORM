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
}

module.exports = PersonController