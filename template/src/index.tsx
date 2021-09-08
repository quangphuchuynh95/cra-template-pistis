import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { NoSsr } from '@material-ui/core';
import { routerMiddleware } from 'connected-react-router';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import createReducer from './reducers';
import reportWebVitals from './reportWebVitals';
import App from './app';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createBrowserHistory();

export const store = createStore(
  createReducer(
    history,
  ),
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      ReduxThunk,
    ),
  ),
);

ReactDOM.render(
  <React.StrictMode>
    <NoSsr>
      <BrowserRouter>
        <ReduxProvider store={store}>
          <App />
        </ReduxProvider>
      </BrowserRouter>
    </NoSsr>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
