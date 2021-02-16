import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// react-redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'

// redux-logger
import { createLogger } from 'redux-logger'

// redux-thunk
import thunkMiddleware from 'redux-thunk'

import App from './containers/App'
import reportWebVitals from './reportWebVitals';
import 'tachyons';

import { searchRobots, requestRobots } from './reducers';

const logger = createLogger()
const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = createStore(rootReducer, applyMiddleware(
  thunkMiddleware
))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
