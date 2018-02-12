import React from 'react';
import Immutable from 'immutable';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './layouts';
import rootReducer from './reducers';
import createStore from './store/createStore';

const initialState = Immutable.Map({});
const store = createStore(rootReducer, initialState);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer warnings={false}>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  );
};

if (module.hot) {
  module.hot.accept('./reducers', async () => {
    const { default: nextReducer } = await import('./reducers');
    store.replaceReducer(nextReducer);
  });
  module.hot.accept('./layouts', async () => {
    const { default: nextApp } = await import('./layouts');
    render(nextApp);
  });
}

render(App);

