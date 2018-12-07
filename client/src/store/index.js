import {
  createBrowserHistory,
} from 'history';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import {
  composeWithDevTools,
} from 'redux-devtools-extension';
import {
  connectRouter,
  routerMiddleware,
} from 'connected-react-router';
import reducer from '../reducers';

export const history = createBrowserHistory();
const initialState = [];

export default createStore(
  connectRouter(history)(reducer),
  initialState,
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
    ),
  ),
);
