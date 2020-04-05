const data = require('../../data.js');
const check = require('../helper/validation');

module.exports = async (req, res, next) => {
  try {
    // max can be made to fail silently by converting to null
    // automatically if it is not a number.
    //const max = parseInt(req.query.max) || null;

    const max = req.query.max ? parseInt(req.query.max) : null;
    const page = parseInt(req.query.page || 0);
    const limit = parseInt(req.query.limit || 100);

    check.validateWithErrorHandling(max, page, limit);

    const start = page * limit;
    const end = (page + 1) * limit;

    if (max === null) {
      return res.status(200).send(data.slice(start, end));
    }

    // If there is nothing in the selected range
    // an error could be thrown but an empty array would
    // also be valid.
    if (data[start] > max) {
      return res.status(200).send([]);
    }

    if (data[end] <= max) {
      return res.status(200).send(data.slice(start, end));
    } else {
      return res.status(200).send(
        data.slice(start, end).filter((val) => {
          return val <= max;
        })
      );
    }
  } catch (err) {
    return next(err);
  }
};
