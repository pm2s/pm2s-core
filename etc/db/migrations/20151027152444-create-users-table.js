'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.createTable('users', {
			id: {
				type: Sequelize.BIGINT,
				primaryKey: true,
				autoIncrement: true
			},
			created_at: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW
			},
			updated_at: {
				type: Sequelize.DATE
			},
			removed_at: {
				type: Sequelize.DATE
			},
			email: {
				type: Sequelize.STRING,
				defaultValue: false,
				allowNull: false
			}
		});
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.dropTable('users')
	}
};
