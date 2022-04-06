const BooksDataSource = require('../data_source/index')

const bookDataSource = new BooksDataSource()

const resolvers = {
    Query: {
        getAllTexts: () => {
            return bookDataSource.getAllTexts()
        }, getATextByTitle: (_, {title}) => {
            return bookDataSource.getATextByTitle(title)
        }, getAText: (_, {input}) => {
            return bookDataSource.getAText(input)
        }
    },

    Mutation: {
        updateAText: (_, {id, input}) => {
            return bookDataSource.updateAText(id, input)
        },
        createAText: (_, {input}) => {
            return bookDataSource.createAText(input)
        }
    },

    Text: {
        __resolveType(text) {
            if (text.type) return 'Book'
            return 'Article'
        },
    },
    Book: {
        authorId(book) {
            return bookDataSource.getAAuthor(book.author)
        }
    },
    Article: {
        authorId(article) {
            return bookDataSource.getAAuthor(article.author)
        }
    }

}

module.exports = resolvers
