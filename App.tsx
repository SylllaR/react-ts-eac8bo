import * as React from 'react';
import './style.scss';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import { Provider } from 'react-redux';
import { initStore } from './redux/createStore';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  const store = React.useMemo(() => {
    return initStore().store;
  }, []);
  const persistor = React.useMemo(() => {
    return initStore().persistor;
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
