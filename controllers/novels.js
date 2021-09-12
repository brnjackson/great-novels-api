const models = require('../models')

const displayAllAuthorsNovelsGenres = async (req, res) => {
  const novels = models.Novels.findAll({
    include: [{
      model: models.Authors
    }, { model: models.Genres }]
  })

  return res.send(novels)
}

const displayAuthorsGenresByNovelId = async (req, res) => {
  try { const { id } = req.params

    const oneNovel = await models.Novels.findOne({
      where: { id },
      include: [{ model: models.Authors },
        { model: models.Genres }
      ]
    })

    return oneNovel
      ? res.send(oneNovel)
      : res.sendStatus(404)
  } catch (error) {
    return res.status(500).send('nothing here! try again!')
  }
}

module.exports = { displayAllAuthorsNovelsGenres, displayAuthorsGenresByNovelId }
