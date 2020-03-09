import { createStore } from 'redux';
import reducer from '../reducer';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer, /* preloadedState, */
  (window as any).__REDUX_DEVTOOLS_EXTENSION__
  && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default store;
