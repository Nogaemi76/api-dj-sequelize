'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DjMusicalGenres', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        default: Sequelize.fn("uuid_generate_v4")
      },
      dj_id: {
        type: Sequelize.UUID,
        references: {
          model: 'Dj',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      musicalgenre_id: {
        type: Sequelize.UUID,
        references: {
          model: 'Musicalgenre',
          key: 'id',
        },
        onDelete: 'CASCADE'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DjMusicalGenres');
  }
};