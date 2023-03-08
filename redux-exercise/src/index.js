import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './CounterSlice';
import todosSlice from './todosSlice';
import App from './App';

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    todos: todosSlice
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
