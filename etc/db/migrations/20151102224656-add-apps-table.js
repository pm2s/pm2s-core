'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.createTable('apps', {
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
			bucket_id: {
				type: Sequelize.BIGINT,
				references: {
					model: 'buckets',
					key: 'id'
				}
			}
		});
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.dropTable('apps')
	}
};
