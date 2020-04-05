const data = require('../../data.js');
const check = require('../helper/validation');
const search = require('../helper/search');

module.exports = async (req, res, next) => {
  try {
    const max = req.query.max ? parseInt(req.query.max) : null;
    const page = parseInt(req.query.page || 0);
    const limit = parseInt(req.query.limit || 100);

    check.validateWithErrorHandling(max, page, limit);

    if (max === null) {
      // The n-1 is to return zero based index. 100 pages, 0-99.
      return res.status(200).send({ lastPage: data.length / limit - 1 });
    }

    let lastPage = search.calculateNumberOfPages(data, max, limit);
    return res.status(200).send({ lastPage: lastPage });
  } catch (err) {
    return next(err);
  }
};
