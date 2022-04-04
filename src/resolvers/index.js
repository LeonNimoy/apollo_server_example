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
        updateABook: (_, {id, input}) => {
            return bookDataSource.updateABook(id, input)
        },
        createABook: (_,{input}) => {
            return bookDataSource.createABook(input)
        }
    }

}

module.exports = resolvers
