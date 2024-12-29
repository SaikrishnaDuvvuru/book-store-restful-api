const express = require('express');
const router = express.Router();

let books = [
    { id: 1, title: 'Book 1', author: 'Author 1', year: 2020 },
    { id: 2, title: 'Book 2', author: 'Author 2', year: 2021 }
];


const addBook = (req, res) => {
    const { id, title, author, year } = req.body;

    if (!id || !title || !author || !year) {
        return res.status(400).send({ message: 'All fields (id, title, author, year) are required.' });
    }

    const existingBook = books.find(book => book.id === id);
    if (existingBook) {
        return res.status(400).send({ message: 'Book with this ID already exists.' });
    }

    const book = { id, title, author, year };
    books.push(book);
    res.status(201).send({ message: 'Book is added to the database', book });

};

const getBooks = (req, res) => {
    res.status(200).send(books);
};


const getBookById = (req, res) => {
    const bookId = parseInt(req.params.id);

    if (isNaN(bookId) || bookId <= 0) {
        return res.status(400).send({ message: 'Invalid Book ID.' });
    }

    if (!bookId) {
        return res.status(400).send({ message: 'Book ID is required.' });
    }
    const book = books.find(book => book.id === bookId);

    if (!book) {
        return res.status(404).send({ message: 'Book not found.' });
    }

    res.status(200).send(book);
}


const editBook = (req, res) => {
    const bookId = parseInt(req.params.id);
    const { title, author, year } = req.body;

    if (isNaN(bookId) || bookId <= 0) {
        return res.status(400).send({ message: 'Invalid Book ID.' });
    }

    if (!title || !author || !year) {
        return res.status(400).send({ message: 'Title, author, and year are required.' });
    }

    if (!bookId) {
        return res.status(400).send({ message: 'Book ID is required.' });
    }

    const bookIndex = books.findIndex(book => book.id === bookId);

    if (bookIndex === -1) {
        return res.status(404).send({ message: 'Book not found.' });
    }

    books[bookIndex] = { id: bookId, title, author, year };
    res.status(200).send(books[bookIndex]);
};

const deleteBook = (req, res) => {
    const bookId = parseInt(req.params.id);

    if (isNaN(bookId) || bookId <= 0) {
        return res.status(400).send({ message: 'Invalid Book ID.' });
    }

    const bookIndex = books.findIndex(book => book.id === bookId);

    if (bookIndex === -1) {
        return res.status(404).send({ message: 'Book not found.' });
    }

    books.splice(bookIndex, 1);

    res.status(200).send({message: "Book deleted", books});
}


module.exports = { addBook, getBooks, getBookById, editBook, deleteBook };