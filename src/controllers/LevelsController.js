const database = require('../models')

class LevelsController {

    static async showAllLevels(req, res) {
      try {
        const allLevels = await database.Levels.findAll()
        return res.status(200).json(allLevels)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    static async findLevel (request, response){
        const { id } = request.params
        try {
            const level = await database.Levels.findOne({
                where:{
                    id:Number(id)
                }
            })
            return response.status(200).json(level)
        } catch(e){
            return response.status(500).json(e.message)
        }
    } 

    static async createLevel (request, response){
        const  newLevel = request.body
        try {
            const createdLevel = await database.Levels.create(newLevel)
            return response.status(200).json(createdLevel)
        } catch(e){
            return response.status(500).json(e.message)
        }
    }

    static async updateLevel(request, response){
        const { id } = request.params
        const  updtlevel = request.body
        try {
            await database.People.update(updtlevel,{ where: { id: Number(id) }})
            
            const updatedLevel = await database.Levels.findOne({
                where:{
                    id:Number(id)
                }
            })
            response.status(200).json(updatedLevel)
        } catch(e){
            return response.status(500).json(e.message)
        }
    
    }
}


module.exports = LevelsController