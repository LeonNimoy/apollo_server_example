const {gql} = require('apollo-server')


const typeDefs = gql`
    type Book {
        id: ID
        title: String
        author: String
        publication_year: Int
                type: BookType
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
        getAllBooks: [Book]
        getABookByTitle(title:String): [Book]
        getABook(input:BookInput): [Book]
    }

    type Mutation {
        updateABook(id:ID!, input: BookInput): Book!
        createABook(input:BookInput): Book!
    }
`


module.exports = typeDefs
