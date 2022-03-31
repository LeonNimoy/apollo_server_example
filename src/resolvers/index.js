const books = require('../data_source')


const resolvers = {
    Query: {
        getAllBooks: () => books,
        getABook: (_, {title}) => {
            return books.filter(book => book.title === title)
        }
    }
}

module.exports = resolvers
