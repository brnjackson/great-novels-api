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

const getNovelByPartialTitle = async (req, res) => {
  try {
    const { partialTitle } = req.params

    const novel = await models.Novels.findOne({
      where: {
        [models.Op.or]: [
          { id: partialTitle },
          { title: { [models.Op.like]: `%${partialTitle}%` } },
        ],
      },
      include: [{ model: models.Authors },
        { model: models.Genres },
      ]
    })

    return novel
      ? res.send(novel)
      : res.sendStatus(404)
  } catch (error) {
    return res.status(500).send('No matches. Try again!')
  }
}

// const getNovelPartialTitle = async (req, res) => {}

module.exports = { displayAllAuthorsNovelsGenres, displayAuthorsGenresByNovelId, getNovelByPartialTitle }
