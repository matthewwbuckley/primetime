// approxBinarySearch will search to page resolution.
// Page length is 100 values by default.
// Note that this is zero based indexed.

exports.calculateNumberOfPages = (array, value, limit = 100) => {
  let count = 0;
  let resolution = array.length / 2;
  let cursor = array.length / 2;
  let isAtRequiredResolution = false;

  while (!isAtRequiredResolution) {
    resolution = Math.floor(resolution / 2);
    count += 1;

    if (resolution < limit) {
      isAtRequiredResolution = true;
    }

    if (array[cursor] < value) {
      cursor += resolution;
    } else if (array[cursor] > value) {
      cursor -= resolution;
    } else {
      break;
    }
  }

  let firstEmptyPage = Math.ceil(cursor / limit);

  // Consider for boundry cases where the cursor
  // was just before or after a new page but the value was
  // on the other side.

  // Upper boundry correction
  if (array[firstEmptyPage * limit] < value) {
    firstEmptyPage += 1;
  }
  // Lower boundry correction
  if (array[(firstEmptyPage - 1) * limit] > value) {
    firstEmptyPage -= 1;
  }

  const lastPage = firstEmptyPage - 1;

  return lastPage;
};

module.exports = exports;
