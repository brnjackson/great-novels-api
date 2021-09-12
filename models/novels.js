const Novels = (connection, Sequelize, Authors) => {
  return connection.define('novels', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: Sequelize.STRING },
    authorId: { type: Sequelize.INTEGER, primaryKey: true, references: { model: Authors, key: 'id' } }

  })
}

module.exports = Novels
