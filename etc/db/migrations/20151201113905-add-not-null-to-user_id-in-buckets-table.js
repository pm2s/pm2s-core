'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.changeColumn('buckets', 'user_id', {
			type: Sequelize.BIGINT,
			allowNull: false
		});
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.changeColumn('buckets', 'user_id', {
			type: Sequelize.BIGINT,
			allowNull: true
		});
	}
};
