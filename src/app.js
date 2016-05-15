import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Index from './components/index.js';

const store = applyMiddleware()(createStore);

//Invoke store with reducers below

ReactDOM.render(
  <Provider store={store}>
    <Index /> 
  </Provider>
  , document.getElementById('app')
);
