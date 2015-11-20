'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.changeColumn('users', 'email', {
			type: Sequelize.STRING,
			allowNull: false
		}).then(function () {
			return queryInterface.addColumn('users', 'name', {
				type: Sequelize.STRING
			});
		});
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.changeColumn('users', 'email', {
			type: Sequelize.STRING,
			allowNull: false,
			defaultValue: false
		}).then(function () {
			return queryInterface.removeColumn('users', 'name');
		});
	}
};
