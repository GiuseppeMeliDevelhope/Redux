import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './CounterSlice';
import App from './App';

const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
