import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import store from './store/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Products />
      </Provider>
    </>
  );
}

export default App;
