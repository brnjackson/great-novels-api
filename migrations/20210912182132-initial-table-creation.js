'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('authors', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      firstName: { type: Sequelize.STRING },
      lastName: { type: Sequelize.STRING },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()')
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })

    await queryInterface.createTable('genres', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      genre: { type: Sequelize.STRING },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()')
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })

    await queryInterface.createTable('novels', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      authorId: {
        type: Sequelize.INTEGER,
        reference: { model: 'authors', key: 'id' }
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()')
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })

    return queryInterface.createTable('novelgenres', {
      novelId: {
        type: Sequelize.INTEGER,
        reference: { model: 'novels', key: 'id' }
      },
      authorId: {
        type: Sequelize.INTEGER,
        reference: { model: 'authors', keu: 'id' }
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()')
      },
      deletedAt: {
        type: Sequelize.DATE
      }

    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('novelgenres')
    await queryInterface.dropTable('novels')
    await queryInterface.dropTable('genres')

    return queryInterface.dropTable('authors')
  }
}
