export const urlBuilder = (baseURL, obj) => {
  let returnURL = baseURL;
  let initial = '?';
  let link = '';

  Object.entries(obj).forEach((query) => {
    returnURL = `${returnURL}${initial}${link}${query[0]}=${query[1]}`;
    if (initial === '?') {
      initial = '';
      link = '&';
    }
  });
  return returnURL;
};
