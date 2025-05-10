exports.errorMiddleware = (err, req, res, next) => {
    console.error(`Error ${err.status || 500 }: ${err.message || 'Internal Server Error'}`)
    res.status(err.status || 500).json({
      errors: err.json || [{msg: 'Internal Server Error'}],
  
    });
}