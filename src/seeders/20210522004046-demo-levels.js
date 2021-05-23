module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Levels', [
			{
				level_Description: 'Basic',
				createdAt: new Date(),
				updatedAt: new Date()			
			},
			{
				level_Description: 'Intermediary',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				level_Description: 'Advanced',
				createdAt: new Date(),
				updatedAt: new Date()
			} 
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Levels', null, {})
  }
}
