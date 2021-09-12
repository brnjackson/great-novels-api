const models = require('../models')

const displayGenres = async (req, res) => {
  const genres = await models.Genres.findAll()

  return res.send(genres)
}

const getAllByGenreId = async (req, res) => {
  const { id } = req.params

  const oneGenre = await models.Genres.findOne({
    where: { id },
    include: [{
      model: models.Novels,
      include: [{
        model: models.Authors
      }]
    }]
  })

  return oneGenre
    ? res.send(oneGenre)
    : res.sendStatus(404)
}

module.exports = { displayGenres, getAllByGenreId }
