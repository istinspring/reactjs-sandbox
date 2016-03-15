/* eslint-env browser, node */
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router, Route,
  IndexRoute, browserHistory
} from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import createStore from './redux/create';
// Application containers
import App from './containers/App.jsx';
import Home from './containers/Home.jsx';
import NoMatch from './containers/NoMatch.jsx';

let store = createStore(browserHistory, window.__data);
const DevTools = require('./containers/DevTools.jsx').default;
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store} key="provider">
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="*" component={NoMatch} status={404} />
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>, document.getElementById('app')
);
