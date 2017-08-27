import { FETCH_SOMETHING } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SOMETHING:
      return action.payload;
    default:
      return state;
  }
}
