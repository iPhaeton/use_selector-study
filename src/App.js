import React, { Fragment } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Goods from './components/Goods';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Goods />
      </Fragment>
    </Provider>
  );
}

export default App;
