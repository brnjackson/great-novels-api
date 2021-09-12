const express = require('express')
const { serverSetup, displayAuthors } = require('./controllers/authors')
const app = express()

// get all genres
// get list of all novels and their authors from one genre by genreid
// get all authors
// get author with their novels & genres of those novels by authorid
// get all novels with their authors and genres
// get one novel with its author and genres

app.use(express.json())

app.get('/', serverSetup)

app.get('/authors', displayAuthors)

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('its party time!')
})
