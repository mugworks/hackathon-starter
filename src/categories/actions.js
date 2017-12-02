import { MILK_ADD, MILK_LOAD, MILK_ERROR } from './constants';
import donationApi from '../services/donation-api.js';
// import shortid from 'short-id';

export function loadMilk() {
  return async dispatch => {
    try {
      const categories = await donationApi.get();
      dispatch({
        type: MILK_LOAD,
        payload: categories
      });
    }
    catch(err) {
      dispatch({
        type: MILK_ERROR,
        payload: err
      });
    }
  };
}

export function addMilk(category) {
  return async dispatch => {
    try {
      const saved = await donationApi.post(category);
      // category.timestamp = new Date();
      dispatch({
        type: MILK_ADD,
        payload: saved
      });
    }
    catch(err) {
      dispatch({
        type: MILK_ERROR,
        payload: err
      });
    }
  };
}

