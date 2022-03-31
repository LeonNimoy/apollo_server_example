const {gql} = require('apollo-server')


const typeDefs = gql`
    type Book {
        title: String
        author: String
        publication_year:Int
    }

    type Query {
        getAllBooks: [Book]
        getABook(title:String!): [Book]
    }
`


module.exports = typeDefs
