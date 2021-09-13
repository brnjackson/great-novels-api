const express = require('express')
const { serverSetup, displayAuthors, getAllByAuthorId, getAuthorPartialName } = require('./controllers/authors')
const { displayGenres, getAllByGenreId } = require('./controllers/genres')
const {
  displayAllAuthorsNovelsGenres,
  displayAuthorsGenresByNovelId,
  getNovelByPartialTitle
} = require('./controllers/novels')

const app = express()

app.use(express.json())

app.get('/', serverSetup)

// get all authors
app.get('/authors', displayAuthors)
// get author with their novels & genres of those novels by authorid
app.get('/authors/:id', getAllByAuthorId)
// get author, novel and genre by author partial name
app.get('/authors/:partialName', getAuthorPartialName)
// get all genres
app.get('/genres', displayGenres)
// get list of all novels and their authors from one genre by genreid
app.get('/genres/:id', getAllByGenreId)
// get all novels with their authors and genres
app.get('/novels', displayAllAuthorsNovelsGenres)
// get one novel with its author and genres by id
app.get('/novels/:id', displayAuthorsGenresByNovelId)
// get novel, author and genre by author partial title name
app.get('novels/:partialTitle', getNovelByPartialTitle)

app.listen(5000, () => {
  // eslint-disable-next-line no-console
  console.log('its party time!')
})
