const database = require('../models')

class ClassesController {

  static async showAllClasses(req, res) {
    try {
      const allClasses = await database.Classes.findAll()
      return res.status(200).json(allClasses)
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async findClass(request, response) {
    const { id } = request.params
    try {
      const englishClass = await database.Classes.findOne({
        where: {
          id: Number(id)
        }
      })
      return response.status(200).json(englishClass)
    } catch (e) {
      return response.status(500).json(e.message)
    }
  }

  static async createClass(request, response) {
    const newClass = request.body
    try {
      const createdClass = await database.Classes.create(newClass)
      return response.status(200).json(createdClass)
    } catch (e) {
      return response.status(500).json(e.message)
    }
  }

  static async updateClass(request, response) {
    const { id } = request.params
    const updtClass = request.body
    try {
      await database.Classes.update(updtClass, { where: { id: Number(id) } })

      const updatedClass = await database.Classes.findOne({
        where: {
          id: Number(id)
        }
      })
      response.status(200).json(updatedClass)
    } catch (e) {
      return response.status(500).json(e.message)
    }
  }
}

module.exports = ClassesController
