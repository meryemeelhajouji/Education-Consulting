const routeErrorHandler =('*',  ( req, res, next) => {
    const err = new Error(('cant find this route'));
  //   next(err.message);
    
    res.json({
        message: err.message,
       
    })
  })
  
  module.exports = {
      routeErrorHandler
  }