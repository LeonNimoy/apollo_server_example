const books = require('../data_source')


const resolvers = {
    Query: {
        getAllBooks: () => books,
        getABookByTitle: (_, {title}) => {
            return books.filter(book => book.title === title)
        },
        getABook: (_, {input}) => {
            return books.filter(book => {
                const bookObjectValues = Object.values(book)
                const inputValue = Object.values(input)

                if (bookObjectValues.includes(inputValue[0])) {
                    return book
                }
            })
        }
    }

}

module.exports = resolvers
