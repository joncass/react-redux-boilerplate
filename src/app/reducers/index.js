// React/Redux
import { combineReducers } from 'redux';

// My library
import todos from './todos';

const todoApp = combineReducers({
  todos,
  // Other reducers here
});

export default todoApp;
