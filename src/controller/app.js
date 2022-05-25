import debug from 'debug';

const AppController = {
  notFound(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  },
  handleError(err, req, res, next) {
    if (err.status !== 404) debug(err.stack);
    res.status(err.status || 500).json({ err: err.message });
  },
};

export default AppController;
