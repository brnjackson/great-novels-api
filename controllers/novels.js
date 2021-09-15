const models = require('../models')

const displayAllNovels = async (req, res) => {
  const novels = await models.Novels.findAll({
    include: [{
      model: models.Authors
    }, { model: models.Genres }]
  })

  return res.send(novels)
}

const getNovelByPartialTitle = async (req, res) => {
  try {
    const { partialTitle } = req.params

    const oneNovel = await models.Novels.findOne({
      where: {
        [models.Op.or]: [
          { id: partialTitle },
          { title: { [models.Op.like]: `%${partialTitle}%` } },
        ],
      },
      include: [
        { model: models.Authors },
        { model: models.Genres },
      ],
    })

    return oneNovel
      ? res.send(oneNovel)
      : res.sendStatus(404)
  } catch (error) {
    return res.status(500).send('No matches. Try again!')
  }
}



// const getNovelPartialTitle = async (req, res) => {}

module.exports = { displayAllNovels, getNovelByPartialTitle }
