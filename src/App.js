import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import { Provider } from 'react-redux';
import store, { history } from './redux/store';
import Router from './router';

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="sm">
        <Router history={history} />
        </Container>
    </Provider>
  );
}

export default App;
