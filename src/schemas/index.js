const {gql} = require('apollo-server')


const typeDefs = gql`
    type Book {
        id: ID
        title: String
        author: String
        publication_year: Int
    }

    input BookInput{
        id: ID
        title: String
        author: String
        publication_year: Int
    }

    type Query {
        getAllBooks: [Book]
        getABookByTitle(title:String): [Book]
        getABook(input:BookInput): [Book]
    }

    type Mutation {
        updateBook(id:ID!, input: BookInput): Book!
    }
`


module.exports = typeDefs
