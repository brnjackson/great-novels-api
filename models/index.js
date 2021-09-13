const Sequelize = require('sequelize')
const allConfigs = require('../configs/sequelize')
const sqlAuthors = require('./authors')
const sqlNovels = require('./novels')
const sqlGenres = require('./genres')
const sqlNovelGenres = require('./novelGenres')

const environment = process.env.NODE_ENC || 'development'
const {
  database, username, host, dialect, password
} = allConfigs[environment]

const connection = new Sequelize(database, username, password, { host, dialect })

const Authors = sqlAuthors(connection, Sequelize)
const Novels = sqlNovels(connection, Sequelize)
const Genres = sqlGenres(connection, Sequelize)
const novelGenres = sqlNovelGenres(connection, Sequelize)

Authors.hasMany(Novels)
Novels.belongsTo(Authors)

Novels.belongsToMany(Genres, { through: novelGenres })
Genres.belongsToMany(Novels, { through: novelGenres })

module.exports = {
  Novels, Authors, Genres, novelGenres, Op: Sequelize.Op
}
