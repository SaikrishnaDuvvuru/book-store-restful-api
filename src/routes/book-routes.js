const express = require('express');
const router = express.Router();

const {addBook, getBooks, getBookById, editBook, deleteBook} = require('../controllers/book-controller');

router.post('/books', addBook);
router.get('/books', getBooks);
router.get('/books/:id', getBookById);
router.put('/books/:id', editBook);
router.delete('/books/:id', deleteBook);    

module.exports = router;