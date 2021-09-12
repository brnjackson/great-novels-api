const Sequelize = require('sequelize')
const sqlAuthors = require('./authors')
const sqlNovels = require('./novels')
const sqlGenres = require('./genres')
const sqlNovelGenres = require('./novelGenres')

const connection = new Sequelize('greatnovels', 'love2Read', 'readingrocks!', {
  host: 'localhost',
  dialect: 'mysql'
})

const Authors = sqlAuthors(connection, Sequelize)
const Novels = sqlNovels(connection, Sequelize)
const Genres = sqlGenres(connection, Sequelize)
const novelGenres = sqlNovelGenres(connection, Sequelize)

Authors.hasMany(Novels)
Novels.belongsTo(Authors)

Novels.belongsToMany(Genres, { through: novelGenres })
Genres.belongsToMany(Novels, { through: novelGenres })

module.exports = { Novels, Authors, Genres, novelGenres }
