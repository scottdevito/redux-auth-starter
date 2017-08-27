import { FETCH_SOMETHING, SOMETHING_SELECTED } from './types';
import database from '../startup/db';

const Belts = database.ref().child('belts');

const fetchSomething = () => {
  return dispatch => {
    Belts.on('value', snapshot => {
      dispatch({
        type: FETCH_SOMETHING,
        payload: snapshot.val(),
      });
    });
  };
};

const selectSomething = selectedThing => {
  return {
    type: SOMETHING_SELECTED,
    payload: selectedThing,
  };
};

export { fetchSomething, selectSomething };
