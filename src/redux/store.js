import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers';
import rootSaga from '../redux/sagas';
export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()

const middleware = [thunk, routerMiddleware(history), sagaMiddleware];

const initialState = {

  };
const store =  createStore(
  createRootReducer(history), 
  initialState,
  compose(
    applyMiddleware(...middleware), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSaga);


export default store;
