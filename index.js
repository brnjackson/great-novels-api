const express = require('express')
const { serverSetup, displayAuthors, getAllByAuthorId } = require('./controllers/authors')
const { displayGenres, getAllByGenreId } = require('./controllers/genres')

const app = express()

// get all authors
// get author with their novels & genres of those novels by authorid
// get all genres
// get list of all novels and their authors from one genre by genreid
// get all novels with their authors and genres
// get one novel with its author and genres

app.use(express.json())

app.get('/', serverSetup)

app.get('/authors', displayAuthors)
app.get('/authors/:id', getAllByAuthorId)
app.get('/genres', displayGenres)
app.get('/genres/:id', getAllByGenreId)

app.listen(5000, () => {
  // eslint-disable-next-line no-console
  console.log('its party time!')
})
