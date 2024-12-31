class AppError extends Error {
    constructor(message, statusCode) {
        console.log('AppError', message, statusCode);
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}

class RequestValidationError extends AppError {
    constructor(message) {
        super(message, 400);

        this.name = 'Request Validation Error';
    }
}

class NotFoundError extends AppError {
    constructor(message) {
        super(message, 404);

        this.name = 'Not Found error';
    }
}

class DatabaseError extends AppError {
    constructor(message) {
        super(message, 404);

        this.name = 'Database error';
    }
}


module.exports = {AppError, RequestValidationError, NotFoundError, DatabaseError};