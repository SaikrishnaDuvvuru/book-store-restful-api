const {RequestValidationError, NotFoundError, DatabaseError} = require('../utilities/app-error');

const errorHandler = (err, req, res, next) => {
  console.log('errorHandler', err);

  // global app error handler
    // if (err instanceof AppError) {
    //     return res.status(err.statusCode).json({
    //       message: err.message,
    //     });
    //   }


    // separate error handler for different type of  errors

      if (err instanceof RequestValidationError) {
        return res.status(err.statusCode).json({
          status: 'fail',
          message: err.message,
          description: err.name
        });
      }

      if (err instanceof NotFoundError) {
        return res.status(err.statusCode).json({
          status: 'fail',
          message: err.message,
          description: err.name
        })
      }

      if (err instanceof DatabaseError) {
        return res.status(err.statusCode).json({
          status: 'fail',
          message: err.message,
          description: err.name
        });
      }

      return res.status(500).json({
        message: 'Something went wrong on the server!',
      });  
};

module.exports = errorHandler;