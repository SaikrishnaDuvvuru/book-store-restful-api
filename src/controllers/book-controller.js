const {RequestValidationError, NotFoundError}  = require('../utilities/app-error');


let books = [
    { id: 1, title: 'Book 1', author: 'Author 1', year: 2020 },
    { id: 2, title: 'Book 2', author: 'Author 2', year: 2021 }
];


const addBook = (req, res, next) => {
    const { id, title, author, year } = req.body;

    if (!id || !title || !author || !year) {
        return next(new RequestValidationError('All fields (id, title, author, year) are required.')); // Bad request error
    }

    const existingBook = books.find(book => book.id === id);
    if (existingBook) {
        return next(new RequestValidationError('Book with this ID already exists.')); // Bad request error
    }

    const book = { id, title, author, year };
    books.push(book);
    res.status(201).send({ message: 'Book is added to the database', book });
};


const getBooks = (req, res) => {
    res.status(200).send(books);
};


const getBookById = (req, res, next) => {
    const bookId = parseInt(req.params.id);

    if (isNaN(bookId) || bookId <= 0) {
        return next(new RequestValidationError('Invalid Book ID.'));
    }

    if (!bookId) {
        return next(new RequestValidationError('Invalid Book ID.'));
    }
    const book = books.find(book => book.id === bookId);

    if (!book) {
        return next(new NotFoundError('Book not found.'))
    }

    res.status(200).send(book);
}


const editBook = (req, res, next) => {
    const bookId = parseInt(req.params.id);
    const { title, author, year } = req.body;

    if (isNaN(bookId) || bookId <= 0) {
        return next(new RequestValidationError('Invalid Book ID.'));

    }

    if (!title || !author || !year) {
        return next(new RequestValidationError('Title, author, and year are required.'));
    }

    if (!bookId) {
        return next(new RequestValidationError('Book ID is required.'));
    }

    const bookIndex = books.findIndex(book => book.id === bookId);

    if (bookIndex === -1) {
        return next(new NotFoundError('Book not found.'))
    }

    books[bookIndex] = { id: bookId, title, author, year };
    res.status(200).send(books[bookIndex]);
};

const patchBook = (req, res, next) => {
    const bookId = parseInt(req.params.id);
    const { title, author, year } = req.body;

    if (isNaN(bookId) || bookId <= 0) {
        return next(new RequestValidationError('Invalid Book ID.'));
    }

    const bookIndex = books.findIndex(book => book.id === bookId);

    if (bookIndex === -1) {
        return next(new NotFoundError('Book not found.'))
    }

    const updatedBook = books[bookIndex];

    if (title) updatedBook.title = title;
    if (author) updatedBook.author = author;
    if (year) updatedBook.year = year;

    books[bookIndex] = updatedBook;

    res.status(200).send(updatedBook);
};


const deleteBook = (req, res, next) => {
    const bookId = parseInt(req.params.id);

    if (isNaN(bookId) || bookId <= 0) {
        return next(new RequestValidationError('Invalid Book ID.'))
    }

    const bookIndex = books.findIndex(book => book.id === bookId);

    if (bookIndex === -1) {
        return next(new NotFoundError('Book not found.'))
    }

    books.splice(bookIndex, 1);

    res.status(200).send({message: "Book deleted", books});
}


module.exports = { addBook, getBooks, getBookById, editBook, patchBook, deleteBook };