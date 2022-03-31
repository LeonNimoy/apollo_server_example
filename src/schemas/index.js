const {gql} = require('apollo-server')


const typeDefs = gql`
    type Book {
        title: String
        author: String
        publication_year:Int
    }

    input BookInput{
        title: String
        author: String
        publication_year:Int
    }

    type Query {
        getAllBooks: [Book]
        getABookByTitle(title:String): [Book]
        getABook(input:BookInput): [Book]
    }
`


module.exports = typeDefs
