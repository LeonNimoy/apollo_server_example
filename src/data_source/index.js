const texts = require("../db/text");
const authors = require("../db/author");

class BooksDataSource {
    getAllTexts() {
        return texts
    }

    getATextByTitle(title) {
        return texts.filter(book => book.title === title)
    }

    getAText(input) {
        return texts.filter(book => {
            const bookObjectValues = Object.values(book)
            const inputValue = Object.values(input)
            if (bookObjectValues.includes(inputValue[0])) {
                return book
            }
        })
    }

    getAAuthor(id) {
        return authors.find(author => author.id === id)
    }

    updateAText(id, input) {
        const book = texts.find(book => book.id === id)
        const inputKeys = Object.keys(input)
        const inputValues = Object.values(input)
        book[`${inputKeys[0]}`] = inputValues[0]
        return book
    }

    createAText(input) {
        texts.push(input)
        const bookAdded = texts[texts.length - 1]
        bookAdded['id'] = texts.length
        return bookAdded
    }
}

module.exports = BooksDataSource
