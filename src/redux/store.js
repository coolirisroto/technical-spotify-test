import { createStore, applyMiddleware } from 'redux';
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
const store =  createStore(createRootReducer(history), initialState,applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);


export default store;
