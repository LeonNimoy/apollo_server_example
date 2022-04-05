const BooksDataSource = require('../data_source/index')

const bookDataSource = new BooksDataSource()

const resolvers = {
    Reader: {
        __resolveType(reader) {
            if (reader.type) return 'Book'
            return 'Article'
        }
    },

    Query: {
        getAllTexts: () => {
            return bookDataSource.getAllTexts()
        },
    }
}

module.exports = resolvers
