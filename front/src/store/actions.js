import * as TYPES from './types';
import { urlBuilder } from './helper';

export const getPrimesAction = async (dispatch, max, page = 1) => {
  dispatch({ type: TYPES.PRIMES_REQUESTED });

  // The backend has zero based pagination
  // The conversion of n-1 to get the correct page is done here
  const baseURL = '/prime/';
  const url = urlBuilder(baseURL, { max: max, page: page - 1 });

  const result = await fetch(url, {
    method: 'get',
    headers: {
      accepts: 'application/json',
    },
  });
  const json = await result.json();
  dispatch({
    type: TYPES.PRIMES_RECEIVED,
    payload: {
      primes: json,
    },
  });
};

export const getNumberOfPages = async (dispatch, max) => {
  dispatch({ type: TYPES.LAST_PAGE_REQUESTED });
  const baseURL = '/prime/last-page/';
  const url = urlBuilder(baseURL, { max: max });
  const result = await fetch(url, {
    method: 'get',
  });
  const json = await result.json();

  // API returnds zero based page index. Not good for
  // frontend. Add one.
  json.lastPage = json.lastPage + 1;

  dispatch({
    type: TYPES.LAST_PAGE_RECEIVED,
    payload: {
      lastPage: json.lastPage,
    },
  });
};

// THOUGHT: These could be made general by asking for a payload
// variable instead. Then spreading the payload in the reducer.
// However, this gives more control to the calling function. I
// think this is better.
export const setMax = async (dispatch, max) => {
  dispatch({ type: TYPES.SET_MAX, payload: { max: max } });
};
export const setPage = async (dispatch, page) => {
  dispatch({ type: TYPES.SET_PAGE, payload: { page: page } });
};
