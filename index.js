const express = require('express')
const { serverSetup, displayAuthors, getAuthorPartialName } = require('./controllers/authors')
const { displayGenres, getAllByGenreId } = require('./controllers/genres')
const { displayAllNovels, getNovelByPartialTitle } = require('./controllers/novels')

const app = express()

app.use(express.json())

app.get('/', serverSetup)

app.get('/authors', displayAuthors)
app.get('/authors/:partialName', getAuthorPartialName)

app.get('/genres', displayGenres)
app.get('/genres/:id', getAllByGenreId)

app.get('/novels', displayAllNovels)
app.get('/novels/:partialTitle', getNovelByPartialTitle)

app.listen(5000, () => {
  // eslint-disable-next-line no-console
  console.log('its party time!')
})
