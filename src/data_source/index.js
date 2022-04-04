const books = require("../db");

class BooksDataSource {
    getAllBooks() {
        return books
    }

    getABookByTitle(title) {
        return books.filter(book => book.title === title)
    }

    getABook(input) {
        return books.filter(book => {
            const bookObjectValues = Object.values(book)
            const inputValue = Object.values(input)

            console.log(bookObjectValues, inputValue)
            if (bookObjectValues.includes(inputValue[0])) {
                return book
            }
        })
    }

    updateBook(id, input) {
        const book = books.find(book => book.id === id)
        const inputKeys = Object.keys(input)
        const inputValues = Object.values(input)
        book[`${inputKeys[0]}`] = inputValues[0]
        return book
    }
}

module.exports = BooksDataSource
