import { SUCCESS, ERROR } from '../constants';

export const alertSuccess = (payload) => {
  return {
    type: SUCCESS,
    payload,
  };
};

export const alertError = (payload) => {
  return {
    type: ERROR,
    payload,
  };
};
