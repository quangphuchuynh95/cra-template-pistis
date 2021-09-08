import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { BrowserHistory } from 'history';

export interface GlobalState {

}

export default function createReducer(history: BrowserHistory, sharedReducers: any = {}) {
  return combineReducers({
    ...(sharedReducers || {}),
    router: connectRouter(history),
  });
}
