'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.changeColumn('apps', 'bucket_id', {
			type: Sequelize.BIGINT,
			allowNull: false
		});
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.changeColumn('apps', 'bucket_id', {
			type: Sequelize.BIGINT,
			allowNull: true
		});
	}
};
