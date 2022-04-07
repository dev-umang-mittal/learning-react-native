import {createStore} from 'redux';

const reduxReducer = (state, action) => {
  try {
    switch (action.type) {
      case 'ADD':
        return state + 1;
      case 'SUBTRACT':
        return state - 1;
      default:
        return state;
    }
  } catch (e) {
    console.log(e);
  }
};

let store = createStore(reduxReducer, 10);

export default store;
