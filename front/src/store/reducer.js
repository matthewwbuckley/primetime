import * as TYPE from './types';

const reducer = (state, action) => {
  switch (action.type) {
    case TYPE.PRIMES_REQUESTED:
      return { ...state, primesRequested: true };
    case TYPE.PRIMES_RECEIVED:
      return {
        ...state,
        primesRequested: false,
        primes: action.payload.primes,
      };
    case TYPE.LAST_PAGE_REQUESTED:
      return { ...state, pageRequested: true };
    case TYPE.LAST_PAGE_RECEIVED:
      return {
        ...state,
        pageRequested: false,
        lastPage: action.payload.lastPage,
      };
    case TYPE.SET_MAX:
      return { ...state, max: action.payload.max };
    case TYPE.SET_PAGE:
      return { ...state, page: action.payload.page };
    default:
      return { ...state };
  }
};

export default reducer;
