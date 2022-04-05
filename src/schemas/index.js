const {gql} = require('apollo-server')


const typeDefs = gql`
    union Reader = Book | Article

    type Book  {
        publication_year: Int
        type: BookType!
    }

    type Article {
        journal: String!
    }

    input BookInput{
        id: ID
        title: String
        author: String
        publication_year: Int
        type: BookType
    }
    """
    This is an enum example.
    """
    enum BookType{
        """
        Usually, this book type is the most expensive one.
        """
        HARDCOVER
        PAPERBACK
        EBOOK
    }

    type Query {
        getAllTexts: [Reader]
    }
`
module.exports = typeDefs
