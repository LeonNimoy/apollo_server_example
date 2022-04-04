const BooksDataSource = require('../data_source/index')

const bookDataSource = new BooksDataSource()

const resolvers = {
    Query: {
        getAllBooks: () => {
            return bookDataSource.getAllBooks()
        }, getABookByTitle: (_, {title}) => {
            return bookDataSource.getABookByTitle(title)
        }, getABook: (_, {input}) => {
            return bookDataSource.getABook(input)
        }
    },

    Mutation: {
        updateBook: (_, {id, input}) => {
            return bookDataSource.updateBook(id, input)
        }
    }

}

module.exports = resolvers
