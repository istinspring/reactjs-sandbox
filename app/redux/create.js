/* eslint-env node, browser */
import {
  createStore as _createStore,
  applyMiddleware, compose
} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import config from '../config';

export default function createStore(history, data) {
  // Sync dispatched route actions to the history
  const reduxRouterMiddleware = syncHistoryWithStore(history);
  const middleware = [
    reduxRouterMiddleware
  ];

  let finalCreateStore;
  const { __DEVELOPMENT__, __CLIENT__, __DEVTOOLS__ } = config.toJS();
  if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
    const { persistState } = require('redux-devtools');
    const DevTools = require('../containers/DevTools.jsx').default;
    finalCreateStore = compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ?
        window.devToolsExtension() : DevTools.instrument(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(_createStore);
  } else {
    finalCreateStore = applyMiddleware(...middleware)(_createStore);
  }

  const reducer = require('./reducer').default;
  const store = finalCreateStore(reducer, data);

  reduxRouterMiddleware.listenForReplays(store);

  // hot replacement for reducers
  // without this you'll need to restart webpack-dev-server
  // to apply reducers
  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(require('./reducer').default);
    });
  }

  return store;
}
