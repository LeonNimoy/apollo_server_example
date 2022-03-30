const books = require('../data_source')


const resolvers = {
    Query: {
        books: () => books
    }
}

module.exports = resolvers
