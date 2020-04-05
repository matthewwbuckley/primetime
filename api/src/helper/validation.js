exports.isValidRange = (page, limit) => {
  // Current data only supports up to 10k primes.
  // Unsure of hardcoding that in is "cheating"

  // The page error bound accounts for the submission of two
  // negative numbers. It is not intended and so an error will
  // be thrown.

  const number = page * limit;
  return number > -1 && number < 10001 && page > -1;
};

exports.isNumber = (value) => {
  return !isNaN(parseInt(value));
};

exports.validateWithErrorHandling = (max, page, limit) => {
  const check = module.exports;

  // Max can either be a number or null.
  // null means that no searching needs to be done.
  const isMaxNumericOrNull = max === null || check.isNumber(max);
  if (!isMaxNumericOrNull) {
    throw new Error('Max is not a number');
  }

  const isRangeNumeric = check.isNumber(page) && check.isNumber(limit);
  if (!isRangeNumeric) {
    throw new Error('Range variables are not numbers');
  }

  const isRangeValid = check.isValidRange(page, limit);
  if (!isRangeValid) {
    throw new Error('Requested range is invalid');
  }
};

module.exports = exports;
