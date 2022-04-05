import {createStore} from 'redux';

const reduxReducer = (state = 0, action = {type: ''}) => {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'SUBTRACT':
      return state - 1;
    default:
      return state;
  }
};

let store = createStore(reduxReducer, 10);

export default store;
