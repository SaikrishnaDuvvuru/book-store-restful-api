const express = require('express');
const router = express.Router();

let books = [];


const addBook = (req, res) => {
    const { title, author, year } = req.body;
    const book = { title, author, year };
    books.push(book);
    res.send('Book is added to the database');
    res.status(200);
};

const getBooks =  (req, res) => {
   res.send(books);
   res.status(200);
};


module.exports = {addBook, getBooks};