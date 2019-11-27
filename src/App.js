import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store, { history } from './redux/store';
import Router from './router';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router history={history} />
      </div>
    </Provider>
  );
}

export default App;
