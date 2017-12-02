import { MILK_LOAD, MILK_ADD } from './constants';

export default function categories(state=[], { type, payload }) {
  console.log('in reducer', payload);
  switch (type) {
  case MILK_LOAD:
    return payload;
  case MILK_ADD:
    return [
      ...state,
      payload
    ];
  default:
    return state;
  }
}