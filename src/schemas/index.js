const {gql} = require('apollo-server')


const typeDefs = gql`
    interface Text {
        id: ID!
        title: String!
        author: String!
    }

    type Book implements Text {
        id: ID!
        title: String!
        author: String!
        publication_year: Int
        type: BookType!
    }

    type Article implements Text {
        id: ID!
        title: String!
        author: String!
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
        getAllTexts: [Text]
        getATextByTitle(title:String): [Text]
        getAText(input:BookInput): [Text]
    }

    type Mutation {
        updateAText(id:ID!, input: BookInput): Text!
        createAText(input:BookInput): Text!
    }
`


module.exports = typeDefs
