import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          <Products />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
