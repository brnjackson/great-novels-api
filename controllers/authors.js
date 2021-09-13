const models = require('../models')

const serverSetup = (req, res) => {
  return res.send('Reading is fun!')
}

const displayAuthors = async (req, res) => {
  const authors = await models.Authors.findAll()

  return res.send(authors)
}

const getAllByAuthorId = async (req, res) => {
  const { id } = req.params

  const oneAuthor = await models.Authors.findOne({
    where: { id },
    include: [{
      model: models.Novels,
      include: [{ model: models.Genres }]
    }]
  })

  return oneAuthor
    ? res.send(oneAuthor)
    : res.sendStatus(404)
}

const getAuthorPartialName = async (req, res) => {
  try {
    const { partialName } = req.params

    const oneAuthor = await models.Authors.findOne({
      where: {
        [models.Op.or]: [
          { id: partialName },
          { lastName: { [models.Op.like]: `%${partialName}%` } },
        ],
      },
      include: [
        {
          model: models.Novels,
          include: [{ model: models.Genres }],
        },
      ],
    })

    return oneAuthor
      ? res.send(oneAuthor)
      : res.sendStatus(404)
  } catch (error) {
    return res.status(500).send('nothing here, sorry!')
  }
}

module.exports = { serverSetup, displayAuthors, getAllByAuthorId, getAuthorPartialName }
