'use strict'

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('authors', [
      { id: 1, firstName: 'Bram', lastName: 'Stoker' },
      { id: 2, firstName: 'Oscar', lastName: 'Wilde' },
      { id: 3, firstName: 'Alice', lastName: 'Walker' },
      { id: 4, firstName: 'Leo', lastName: 'Tolstoy' },
      { id: 5, firstName: 'Charles', lastName: 'Dickens' },
      { id: 6, firstName: 'Arthur', lastName: 'Miller' },
      { id: 7, firstName: 'Alexandre', lastName: 'Dumas' },
      { id: 8, firstName: 'Arthur Conan', lastName: 'Doyle' },
      { id: 9, firstName: 'Robert Louis', lastName: 'Stevenson' },
      { id: 10, firstName: 'Fyodor', lastName: 'Dostoyevsky' },
      { id: 11, firstName: 'Agatha', lastName: 'Christie' },
      { id: 12, firstName: 'Ray', lastName: 'Bradbury' },
      { id: 13, firstName: 'George', lastName: 'Orwell' },
      { id: 14, firstName: 'H.G.', lastName: 'Wells' },
      { id: 15, firstName: 'Chinua', lastName: ' Achebe' }
    ])

    await queryInterface.bulkInsert('genres', [
      { id: 1, genre: 'Fiction' },
      { id: 2, genre: 'Horror' },
      { id: 3, genre: 'Fantasy' },
      { id: 4, genre: 'Gothic' },
      { id: 5, genre: 'Historical Fiction' },
      { id: 6, genre: 'War' },
      { id: 7, genre: 'Russian Literature' },
      { id: 8, genre: 'Drama' },
      { id: 9, genre: 'Plays' },
      { id: 10, genre: 'Adventure' },
      { id: 11, genre: 'French Literature' },
      { id: 12, genre: 'Mystery' },
      { id: 13, genre: 'Crime' },
      { id: 14, genre: 'Thriller' },
      { id: 15, genre: 'Science Fiction"' },
      { id: 16, genre: 'Dystopia' },
      { id: 17, genre: 'Time Travel' },
      { id: 18, genre: 'Dystopia' }
    ])

    await queryInterface.bulkInsert('novels', [
      { title: 'Dracula', authorId: 1 },
      { title: 'The Picture of Dorian Gray', authorId: 2 },
      { title: 'The Color Purple', authorId: 3 },
      { title: 'War and Peace', authorId: 4 },
      { title: 'A Tale of Two Cities', authorId: 5 },
      { title: 'The Crucible', authorId: 6 },
      { title: 'The Three Musketeers', authorId: 7 },
      { title: 'The Hound of the Baskervilles', authorId: 8 },
      { title: 'The Strange Case of Dr. Jekyll and Mr. Hyde', authorId: 9 },
      { title: 'Crime and Punishment', authorId: 10 },
      { title: 'Murder on the Orient Express', authorId: 11 },
      { title: 'Fahrenheit 451', authorId: 12 },
      { title: 'Animal Farm', authorId: 13 },
      { title: 'The Time Machine', authorId: 14 },
      { title: 'Things Fall Apart', authorId: 15 },
    ])

    return queryInterface.bulkInsert('novelgenres', [
      // novelid = 1
      { novelId: 1, genreId: 1 },
      { novelId: 1, genreId: 2 },
      { novelId: 1, genreId: 3 },
      // novelid = 2
      { novelId: 2, genreId: 1 },
      { novelId: 2, genreId: 2 },
      { novelId: 2, genreId: 3 },
      { novelId: 2, genreId: 4 },
      // novelid = 3
      { novelId: 3, genreId: 1 },
      { novelId: 3, genreId: 5 },
      // novelid = 4
      { novelId: 4, genreId: 1 },
      { novelId: 4, genreId: 5 },
      { novelId: 4, genreId: 6 },
      { novelId: 4, genreId: 7 },
      // novelid = 5
      { novelId: 5, genreId: 1 },
      { novelId: 5, genreId: 5 },
      // novelid = 6
      { novelId: 6, genreId: 1 },
      { novelId: 6, genreId: 5 },
      { novelId: 6, genreId: 8 },
      { novelId: 6, genreId: 9 },
      // novelid = 7
      { novelId: 7, genreId: 1 },
      { novelId: 7, genreId: 5 },
      { novelId: 7, genreId: 10 },
      { novelId: 7, genreId: 11 },
      // novelid = 8
      { novelId: 8, genreId: 1 },
      { novelId: 8, genreId: 12 },
      { novelId: 8, genreId: 13 },
      { novelId: 8, genreId: 14 },
      // novelid = 9
      { novelId: 9, genreId: 1 },
      { novelId: 9, genreId: 12 },
      { novelId: 9, genreId: 15 },
      { novelId: 9, genreId: 2 },
      // novelid = 10
      { novelId: 10, genreId: 1 },
      { novelId: 10, genreId: 7 },
      { novelId: 10, genreId: 12 },
      // novelid = 11
      { novelId: 11, genreId: 1 },
      { novelId: 11, genreId: 12 },
      // novelid = 12
      { novelId: 12, genreId: 1 },
      { novelId: 12, genreId: 15 },
      { novelId: 12, genreId: 16 },
      // novelid = 13
      { novelId: 13, genreId: 1 },
      { novelId: 13, genreId: 15 },
      { novelId: 13, genreId: 16 },
      // novelid = 14
      { novelId: 14, genreId: 1 },
      { novelId: 14, genreId: 15 },
      { novelId: 14, genreId: 17 },
      // novelid = 15
      { novelId: 15, genreId: 1 },
      { novelId: 15, genreId: 5 },
      { novelId: 15, genreId: 18 },

    ])
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('authors')
    await queryInterface.bulkDelete('genres')
    await queryInterface.bulkDelete('novels')

    return await queryInterface.bulkDelete('novelgenres')
  }
}
